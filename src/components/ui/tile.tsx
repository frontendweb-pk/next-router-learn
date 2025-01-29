import { Subcategory } from "@/types";
import Link from "next/link";
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

/**
 * (
    <Link
      href={`/${parent}${item.path}`}
      className="bg-white rounded-md border border-gray-200 shadow-sm p-4"
    >
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>
    </Link>
  );
 */
