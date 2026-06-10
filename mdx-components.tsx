import type { MDXComponents } from 'mdx/types';
import Posts from './components/Posts';

 
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif py-2 text-2xl">{children}</h1>
  ),
  h2: ({ children }) => (
    <h1 className="font-serif py-2 text-xl">{children}</h1>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 my-4 space-y-2">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 my-4 space-y-2">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="text-base leading-relaxed">{children}</li>
  ),
  a: ({ href, children, ...props }) => (
    <a href={href} target="_blank" className="border-b border-dashed border-neutral-500 hover:border-neutral-400 transition-all">{children}</a>
  ),
  Posts
};
 
export function useMDXComponents(): MDXComponents {
  return components
};