"use client";
import ArrowDownIcon from "./arrow-down.svg";
import Image from "next/image";

export type CardSize = "S" | "M" | "L";

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
    <div className="flex flex-col items-center">
      {/* {isSelected && <Image src={ArrowDownIcon} alt="arrow down icon" />} */}
      <button
        className={`text-xl p-2.5 border border-black1 ${
          isSelected ? "bg-white" : "text-white"
        }`}
        onClick={onClick}
      >
        {value}
      </button>
    </div>
  );
}

interface SizeSelectorProps {
  selectedValue: CardSize;
  onSizeSelect: (size: CardSize) => void;
}

export default function SizeSelector({
  selectedValue,
  onSizeSelect,
}: SizeSelectorProps) {
  return (
    <div className="flex">
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedValue === "S"}
          value="S"
          onClick={() => onSizeSelect("S")}
        />
      </div>
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedValue === "M"}
          value="M"
          onClick={() => onSizeSelect("M")}
        />
      </div>
      <div className="ml-2.5">
        <SizeSelectorItem
          isSelected={selectedValue === "L"}
          value="L"
          onClick={() => onSizeSelect("L")}
        />
      </div>
    </div>
  );
}
