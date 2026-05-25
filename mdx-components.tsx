import type { MDXComponents } from 'mdx/types';
import { JacquardLoom } from "@/components/JacquardLoom";

 
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="font-serif py-2 text-xl">{children}</h1>
  ),
  JacquardLoom
};
 
export function useMDXComponents(): MDXComponents {
  return components
};