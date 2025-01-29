import type { MDXComponents } from "mdx/types";

export function useMDXComponents(component: MDXComponents) {
  return {
    ...component,
  };
}
