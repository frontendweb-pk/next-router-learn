import fs from "fs/promises";
import path from "path";
import { cwd } from "process";

export const getContent = async (slug: string) => {
  const dir = path.resolve(cwd(), "src", "content", `${slug}.mdx`);
  const content = await fs.readFile(dir, "utf-8");
  return content;
};
