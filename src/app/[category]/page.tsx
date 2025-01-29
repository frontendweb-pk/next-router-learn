import Tile from "@/components/ui/tile";
import { subcategory } from "@/data/category";

type Props = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default async function Category({ params }: Props) {
  const { category } = await params;

  const items = subcategory.filter((item) => item.category === category);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <Tile parent={category} key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
