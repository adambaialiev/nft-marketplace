"use client";
import useCardSizeStore from "@/app/_store/useCardSizeStore";
import { CardSize } from "@/app/types";
import ArrowDownIcon from "./arrow-down.svg";
import Image from "next/image";

interface SizeSelectorItemProps {
  isSelected: boolean;
  value: CardSize;
  onClick: () => void;
}

function SizeSelectorItem({
  isSelected,
  value,
  onClick,
}: SizeSelectorItemProps) {
  return (
    <div className="flex flex-col items-center justify-center relative">
      {isSelected && (
        <Image
          src={ArrowDownIcon}
          alt="arrow down icon"
          className="absolute top-[-7px]"
        />
      )}
      <button
        className={`text-xl px-[12px] py-[5px] border ${
          isSelected ? "bg-white border-white" : "text-white border-black1"
        }`}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

export default function SizeSelector() {
  const selectedCardSize = useCardSizeStore((state) => state.cardSize);
  const setCardSize = useCardSizeStore((state) => state.setCardSize);
  return (
    <div className="flex">
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedCardSize === "S"}
          value="S"
          onClick={() => setCardSize("S")}
        />
      </div>
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedCardSize === "M"}
          value="M"
          onClick={() => setCardSize("M")}
        />
      </div>
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedCardSize === "L"}
          value="L"
          onClick={() => setCardSize("L")}
        />
      </div>
    </div>
  );
}
