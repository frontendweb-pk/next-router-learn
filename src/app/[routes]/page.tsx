import Content from "@/components/ui/content";
import { readContentFromFile } from "@/utility/content";
import { serialize } from "next-mdx-remote/serialize";
import { Suspense } from "react";

type Props = {
  params: Promise<{ routes: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Category({ params }: Props) {
  const { routes } = await params;
  const content = await readContentFromFile(routes);
  if (!content) {
    return <div>Content not found</div>;
  }

  const mdxSource = await serialize(content, { parseFrontmatter: true });

  return (
    <div className="gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Content content={mdxSource} />
      </Suspense>
    </div>
  );
}
