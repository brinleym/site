import type { MDXComponents } from 'mdx/types';
import Posts from './components/Posts';

 
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif py-2 text-2xl">{children}</h1>
  ),
  Posts
};
 
export function useMDXComponents(): MDXComponents {
  return components
};