import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Update this path to look inside your app directory's route group
const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
};

export function getSortedPostsData(): PostMetadata[] {
  // 1. Check if directory exists
  if (!fs.existsSync(postsDirectory)) return [];

  // 2. Read all files directly from the flat posts/ directory
  const filenames = fs.readdirSync(postsDirectory);
  
  const allPostsData = filenames
    .map((filename) => {
      // Ignore system files (like .DS_Store) and only parse .mdx files
      if (!filename.endsWith('.mdx')) return null;

      // Construct the absolute path to the file
      const mdxPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(mdxPath, 'utf8');
      
      // Parse with gray-matter
      const matterResult = matter(fileContents);

      // CLEAN THE SLUG: Remove the ".mdx" extension from the filename
      // "collected-wisdom.mdx" becomes "collected-wisdom"
      const cleanSlug = filename.replace(/\.mdx$/, '');

      return {
        slug: cleanSlug,
        title: matterResult.data.title || 'Untitled Post',
        date: matterResult.data.date || '',
      };
    })
    .filter((post): post is PostMetadata => post !== null); // Safely filter out nulls

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}