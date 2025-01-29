"use client";

import { useSelectedLayoutSegment } from "next/navigation";
import Breadcrumbs from "./breadcrumbs";

export default function PageTitle() {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="flex flex-col gap-2 border-b border-slate-200 pb-2 mb-4">
      <h1 className="text-2xl font-bold capitalize">{segment}</h1>
      <Breadcrumbs />
    </div>
  );
}
