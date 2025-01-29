import { getRoutes } from "@/actions/category";
import Logo from "./logo";
import { NavItem } from "../ui/nav-item";

export default async function Sidebar() {
  const routes = await getRoutes();
  return (
    <div className="bg-slate-900 w-64 text-white p-2">
      <Logo />

      <div className="mt-4 border-t   border-t-white/30 mx-2" />

      <div className="flex flex-col gap-2 mt-4 p-2">
        {routes.map((category) => (
          <NavItem key={category.id} route={category} />
        ))}
      </div>
    </div>
  );
}
