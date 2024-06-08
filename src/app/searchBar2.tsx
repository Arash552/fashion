"use client";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter()
  return (
    <div className="w-3/4 flex items-center border-[1px] border-solid border-gray-300 text-gray-900 p-2 rounded-2xl mb-4 md:mb-0">
      <i className="bi-search text-sm text-gray-900 mr-1"></i>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="w-full text-sm text-gray-900 rounded-2xl bg-transparent outline-none border-none"
        onKeyUp={(e: React.KeyboardEvent) => {
          if (e.key == "Enter") {
            router.push(`${(e.target as HTMLInputElement).value}`)
          }
        }}
      />
    </div>
  );
}
