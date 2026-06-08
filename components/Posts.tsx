import Link from 'next/link';
import { getSortedPostsData } from '@/lib/blog';

export default function Posts() {
  const posts = getSortedPostsData();

  return (
      <div className="space-y-8">
        {posts.map(({ slug, title, date, excerpt }) => (
          <article key={slug} className="border-b border-gray-200 pb-6">
            <h2 className="text-2xl font-semibold text-blue-600 hover:underline mb-2">
              <Link href={`/posts/${slug}`}>{title}</Link>
            </h2>
            <small className="text-gray-500 block mb-2">{date}</small>
            <p className="text-gray-700">{excerpt}</p>
          </article>
        ))}
      </div>
  );
};