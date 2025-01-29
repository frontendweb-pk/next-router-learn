import { Suspense } from "react";

type Props = {
  params: Promise<{ routes: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Category({ params }: Props) {
  const { routes } = await params;
  const { default: Component } = await import(`@/content/${routes}.mdx`);

  await new Promise((res) => setTimeout(res, 1000)); // slow loading for 1 second

  return (
    <div className="gap-4">
      <Component />
    </div>
  );
}
