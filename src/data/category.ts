import type { Category, Subcategory } from "@/types";

export const categories: Category[] = [
  {
    id: 1,
    name: "Routes",
    path: "/routes",
  },
  {
    id: 2,
    name: "Data fetching",
    path: "/data-fetching",
  },
  {
    id: 3,
    name: "Rendering",
    path: "/rendering",
  },
  {
    id: 4,
    name: "Authentication",
    path: "/authentication",
  },
];

export const subcategory: Subcategory[] = [
  {
    id: 1,
    category: "routes",
    name: "Nested Routes",
    path: "/nested-route",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 2,
    category: "routes",
    name: "Dynamic Routes",
    path: "/dynamic-route",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 3,
    category: "routes",
    name: "Catch All Routes",
    path: "/catch-all-route",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 4,
    category: "routes",
    name: "Optional Catch All Routes",
    path: "/optional-catch-all-route",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 5,
    category: "data-fetching",
    name: "Data fetching",
    path: "/data-fetching",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 6,
    category: "rendering",
    name: "Rendering",
    path: "/rendering",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
  {
    id: 8,
    category: "authentication",
    name: "Session Management",
    path: "/session",
    description: "loreum ipsum",
    code: "code",
    image: "image",
  },
];
