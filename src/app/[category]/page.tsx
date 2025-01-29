import Tabs from "@/components/ui/tabs";
import Tile from "@/components/ui/tile";
import { subcategory } from "@/data/category";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Category({ params }: Props) {
  const { category } = await params;

  const tabItems = subcategory.filter((item) => item.category === category);

  return (
    <div>
      <Tabs root={category} tabs={tabItems ?? []} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tabItems.map((item) => (
          <Tile parent={category} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
