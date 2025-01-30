"use client";
import { Category } from "@/types";
import { Component } from "lucide-react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link, { LinkProps } from "next/link";
import clsx from "clsx";

export type NavItemProps = Omit<LinkProps, "href"> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    route: Category;
    parentRoute?: string;
  };
export function NavItem({
  route,
  parentRoute,
  className,
  ...rest
}: NavItemProps) {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();
  const url = parentRoute ? `/${parentRoute}${route.path}` : route.path;
  const isActive = route.path === segment;

  return (
    <Link
      className={clsx(
        "flex rounded-md p-2 hover:text-white hover:bg-slate-700 text-sm items-center gap-2",
        {
          "bg-slate-700 text-white": pathname.includes(url),
        },
        className
      )}
      href={url}
      {...rest}
    >
      <Component size={14} /> {route.name}
    </Link>
  );
}
