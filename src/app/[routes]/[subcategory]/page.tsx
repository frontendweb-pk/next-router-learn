import Tabs from "@/components/ui/tabs";

export default async function Page({
  params,
}: {
  params: Promise<{ category: string; subcategory: string }>;
}) {
  const { category, subcategory } = await params;
  return (
    <div>
      category: {category}, subcategory:{subcategory}
      <Tabs root={subcategory} tabs={[]} />
    </div>
  );
}
