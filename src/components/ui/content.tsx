"use client";

import { MDXRemote } from "next-mdx-remote";
import Counter from "../common/counter";

export default function Content({ content }: { content: any }) {
  return <MDXRemote {...content} components={{ Counter }} />;
}
