import { getContent } from "@/utility/content";
import markdownit from "markdown-it";
type Props = {
  params: Promise<{ routes: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Category({ params }: Props) {
  const { routes } = await params;
  const content = await getContent(routes);

  const md = markdownit();
  return (
    <div className="gap-4">
      <div
        className="py-2 mt-4"
        dangerouslySetInnerHTML={{ __html: md.render(content) }}
      ></div>
      {/* {content} */}
    </div>
  );
}
