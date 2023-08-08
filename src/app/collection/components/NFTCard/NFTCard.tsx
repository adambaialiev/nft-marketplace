"use client";
import Image from "next/image";
import { CardSize, NFTItem } from "@/app/types";

interface NFTCardProps {
  nft: NFTItem;
  cardSize: CardSize;
}

const getDimensionsForCardSize = (
  size: CardSize
): { width: number; height: number } => {
  switch (size) {
    case "S":
      return {
        width: 208,
        height: 312,
      };
    case "M":
      return {
        width: 273,
        height: 410,
      };
    case "L":
      return {
        width: 312,
        height: 468,
      };
    default:
      throw new Error("Wrong size");
  }
};

export default function NFTCard({ nft, cardSize }: NFTCardProps) {
  const { name, fileUrl, tag } = nft;

  return (
    <div
      className="relative group"
      style={{ ...getDimensionsForCardSize(cardSize) }}
    >
      <Image
        alt={name}
        src={fileUrl}
        blurDataURL="/card-placeholder.png"
        placeholder="blur"
        {...getDimensionsForCardSize(cardSize)}
      />
      <div className="invisible group-hover:visible absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-between p-[35%] bg-black-transparent">
        <div>
          <div className="bg-orange2 text-orange text-[10px] p-[5px] rounded-[5px] flex items-center justify-center uppercase">
            {tag}
          </div>
          <span className="text-white text-[32px]">{name}</span>
        </div>
        <button className="border border-orange py-2.5 px-5 text-orange uppercase text-sm">
          Purchase
        </button>
      </div>
    </div>
  );
}
