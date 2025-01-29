import fs from "fs/promises";
import path from "path";
import { cwd } from "process";

export const readContentFromFile = async (
  slug: string,
  dir: string = "content"
) => {
  const dirPath = path.resolve(cwd(), "src", dir, `${slug}.mdx`);
  const content = await fs.readFile(dirPath, "utf-8");
  return content;
};

export const getFiles = async () => {
  const dir = path.resolve(cwd(), "src", "content");
  const files = await fs.readdir(dir);
  return files;
};
