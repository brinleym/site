import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { useMDXComponents } from '@/mdx-components';
import Link from 'next/link';

// Define the structure of your MDX frontmatter metadata
interface Frontmatter {
  title: string;
  slug: string;
  date: string;
}

interface PostData {
  frontmatter: Frontmatter;
  content: string;
}

// Next.js page component props type
interface PageProps {
  params: Promise<{ slug: string }>;
}

const postsDirectory = path.join(process.cwd(), 'posts');

// Tells Next.js which slugs to statically generate at build time
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  if (!fs.existsSync(postsDirectory)) return [];
  
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

// Helper to safely read and parse the MDX file
function getPostData(slug: string): PostData | null {
  try {
    const filePath = path.join(postsDirectory, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) return null;

    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // Pass the Frontmatter interface to gray-matter's generic parser
    const { data, content } = matter(fileContents);

    return { 
      frontmatter: data as Frontmatter, 
      content 
    };
  } catch (e) {
    return null;
  }
}

// The core Page Component
export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // Guard rail for explicit static pages
  if (slug === 'index' || slug === 'about') {
    return notFound();
  }

  const post = getPostData(slug);

  // If no matching MDX file is found, trigger a 404
  if (!post) {
    return notFound();
  }

  const customComponents = useMDXComponents();

  return (
    <main>
        <div>
            <Link href="/" className="text-sm">
                ← Back to home
            </Link>
        </div>
        <article className="my-20">
            <h1 className="font-serif text-2xl">{post.frontmatter.title}</h1>
            
            {/* Renders the clean markdown content string */}
            <MDXRemote source={post.content} components={customComponents} />
        </article>
    </main>
  );
}