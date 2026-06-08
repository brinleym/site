import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export default function Posts() {
  const posts = getSortedPostsData();
  console.log(posts);

  return (
      <ul className="space-y-8">
        {posts.map(({ slug, title }) => (
            <li key={slug}>
                <Link className="border-b border-dashed border-neutral-500 hover:border-neutral-400 transition-all" href={`/posts/${slug}`}>{title}</Link>
            </li>
        ))}
      </ul>
  );
};