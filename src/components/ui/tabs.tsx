import { Subcategory } from "@/types";
import { NavItem } from "./nav-item";

type TabsProps = {
  root: string;
  tabs: Subcategory[];
};
export default function Tabs({ root = "/", tabs }: TabsProps) {
  return (
    <div className="flex flex-row gap-4">
      {tabs.map((tab) => (
        <NavItem key={tab.id} parentRoute={root} route={tab} />
      ))}
    </div>
  );
}
