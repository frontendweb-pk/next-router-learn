import { MenuIcon } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <div className="flex justify-between items-center p-2 text-lg">
      <Link href="/" className="flex items-center gap-3">
        <div className="h-8 w-8 bg-white rounded-md text-slate-900 flex justify-center items-center text-sm font-bold">
          ND
        </div>
        <h1>Next doc</h1>
      </Link>
      <button>
        <MenuIcon size={24} />
      </button>
    </div>
  );
}
