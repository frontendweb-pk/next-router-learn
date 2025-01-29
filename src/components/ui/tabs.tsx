import { Subcategory } from "@/types";
import Link from "next/link";
import { NavItem } from "./nav-item";

type TabsProps = {
  root: string;
  tabs: Subcategory[];
};
export default function Tabs({ root = "/", tabs }: TabsProps) {
  return (
    <div className="flex flex-row gap-4">
      {tabs.map((tab) => (
        <NavItem parentRoute={root} route={tab} />
      ))}
    </div>
  );
}
