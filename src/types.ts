import { IconNode, LucideProps } from "lucide-react";
import { ReactElement } from "react";

export interface Category {
  id: number;
  name: string;
  slug?: string;
  path: string;
  icon?: IconNode | LucideProps | ReactElement;
  image?: string;
  description?: string;
}

export interface Subcategory {
  id: number;
  category: string;
  name: string;
  path: string;
  description: string;
  code: string;
  image: string;
}
