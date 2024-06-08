"use client";

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter()
  return (
    <div className="flex items-center bg-[#343434] text-gray-300 p-2 rounded-2xl">
      <i className="bi-search text-sm text-gray-300 mr-1"></i>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search..."
        className="text-sm text-gray-300 rounded-2xl bg-transparent outline-none border-none"
        onKeyUp={(e: React.KeyboardEvent) => {
          if (e.key == "Enter") {
            router.push(`${(e.target as HTMLInputElement).value}`)
          }
        }}
      />
    </div>
  );
}
