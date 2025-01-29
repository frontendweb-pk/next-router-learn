import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

// Merge MDX config with Next.js config

const withMDX = createMDX({
  extension: /\.mdx?$/,
});
export default withMDX(nextConfig);
