import { Subcategory } from "@/types";

import { NavItem } from "./nav-item";

export default function Tile({
  item,
  parent = "/",
}: {
  item: Subcategory;
  parent: string;
}) {
  return <NavItem parentRoute={parent} route={item} />;
}
