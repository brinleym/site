import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Update this path to look inside your app directory's route group
const postsDirectory = path.join(process.cwd(), 'app/posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
};

export function getSortedPostsData(): PostMetadata[] {
  // 1. Check if directory exists to avoid application crashes
  if (!fs.existsSync(postsDirectory)) return [];

  // 2. Read all items inside app/(articles)
  const folderNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = folderNames
    .map((folderName) => {
      // The folder name is your URL slug (e.g., 'first-post')
      const mdxPath = path.join(postsDirectory, folderName, 'page.mdx');

      // Skip files or folders that do not contain a page.mdx file
      if (!fs.existsSync(mdxPath)) return null;

      // Read the raw MDX contents
      const fileContents = fs.readFileSync(mdxPath, 'utf8');

      // Parse the frontmatter at the top of page.mdx
      const matterResult = matter(fileContents);

      return {
        slug: folderName,
        title: matterResult.data.title || 'Untitled Post',
        date: matterResult.data.date || '',
      };
    })
    .filter(Boolean) as PostMetadata[]; // Filter out null values safely

  // Sort posts by date string
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};