import MyLink from "./MyLink";
import { getSortedPostsData } from '@/lib/blog';

export default function Posts() {
  const posts = getSortedPostsData();

  return (
      <ul>
        {posts.map(({ slug, title }) => (
            <li key={slug}>
              <MyLink text={title} url={slug} />
            </li>
        ))}
      </ul>
  );
};