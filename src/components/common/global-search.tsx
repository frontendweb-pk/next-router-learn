"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function GlobalSearch() {
  const router = useRouter();
  const sarchParams = useSearchParams();

  const search = sarchParams.get("search") || "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams();
    const search = new FormData(e.currentTarget).get("search") as string;
    console.log(search, params);
    params.set("search", search);
    router.push(`/?${params.toString()}`);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.cancelable);
    if (e.cancelable) {
      console.log("HI");
    }

    router.push(`/?`);
  }

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="search"
        defaultValue={search}
        placeholder="Search..."
        className="border-2 border-gray-200 rounded-md p-2"
        name="search"
        onChange={handleChange}
      />
      <button className="bg-blue-500 text-white rounded-md p-2" type="submit">
        Search
      </button>
    </form>
  );
}
