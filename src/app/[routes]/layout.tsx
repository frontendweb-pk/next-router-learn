import Counter from "@/components/common/counter";
import Tabs from "@/components/ui/tabs";
import { subcategory } from "@/data/category";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ routes: string }>;
}) {
  const { routes } = await params;
  const tabItems = subcategory.filter((item) => item.category === routes);

  return (
    <>
      <div className="flex items-center justify-between">
        <Tabs
          root={routes}
          tabs={[
            {
              id: 11,
              name: "Home",
              category: routes,
              image: "",
              path: "",
              description: "",
              code: "",
            },
            ...tabItems,
          ]}
        />
        <Counter />
      </div>
      {children}
    </>
  );
}
