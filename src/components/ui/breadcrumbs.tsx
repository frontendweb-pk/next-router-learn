"use client";

import { useSelectedLayoutSegments } from "next/navigation";

export default function Breadcrumbs() {
  const segments = useSelectedLayoutSegments();

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 italic text-sm">
        <li>
          <a href="#" className=" pointer-events-none">
            next-doc.com
          </a>
        </li>
        <span className="mx-2 text-gray-500">/</span>
        {segments.map((segment, index) => (
          <BreadcrumbItem
            key={index}
            link={"/" + segment}
            label={segment}
            isLast={index === segments.length - 1}
          />
        ))}
      </ol>
    </nav>
  );
}

// Breadcrumb Item component for each part of the breadcrumb trail
const BreadcrumbItem = ({
  link,
  label,
  isLast,
}: {
  link: string;
  label: string;
  isLast: boolean;
}) => {
  return (
    <li className={`flex items-center ${isLast ? "text-gray-500" : ""}`}>
      {isLast ? (
        <span>{label}</span>
      ) : (
        <a href={link} className="text-rose-600 hover:text-slate-800">
          {label}
        </a>
      )}
      {!isLast && <span className="mx-2 text-gray-500">/</span>}
    </li>
  );
};
