"use client";
import { Category } from "@/types";
import { Component } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
export type NavItemProps = {
  route: Category;
  parentRoute?: string;
};
export function NavItem({ route, parentRoute }: NavItemProps) {
  const pathname = usePathname();

  return (
    <Link
      className={clsx(
        "flex rounded-md p-2 hover:text-white hover:bg-slate-700 text-sm items-center gap-2",
        {
          "bg-slate-700": pathname == route.path,
        }
      )}
      href={route.path}
    >
      <Component size={14} /> {route.name}
    </Link>
  );
}
