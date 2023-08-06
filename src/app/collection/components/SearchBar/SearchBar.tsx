import Image from "next/image";
import SearchIcon from "./search-icon.svg";

export default function SearchBar() {
  return (
    <div className="border-b border-black1 flex py-[30px] px-10">
      <div className="flex bg-black2 h-[60px] flex-1 max-w-screen-md px-2.5">
        <Image src={SearchIcon} alt="search icon" priority className="mr-2.5" />
        <input
          className="bg-inherit flex-1 text-white outline-none"
          placeholder="SEARCH"
        />
      </div>
    </div>
  );
}
