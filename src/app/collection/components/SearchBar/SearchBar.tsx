"use client";
import Image from "next/image";
import SearchIcon from "./search-icon.svg";
import SizeSelector from "../SizeSelector/SizeSelector";
import useSearchStore from "@/app/_store/useSearchStore";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearchStore();
  return (
    <div className="border-b border-black1 flex flex-col sm:flex-row py-[30px] px-10 sm:justify-between sm:items-end">
      <div className="flex bg-black2 h-[60px] sm:flex-1 mb-3 sm:mb-0 max-w-screen-md px-2.5">
        <Image src={SearchIcon} alt="search icon" priority className="mr-2.5" />
        <input
          className="bg-inherit flex-1 text-white outline-none"
          placeholder="SEARCH"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="self-center sm:self-auto">
        <SizeSelector />
      </div>
    </div>
  );
}
