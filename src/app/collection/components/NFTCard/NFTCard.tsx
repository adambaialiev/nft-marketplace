"use client";
import Image from "next/image";
import { CardSize, NFTItem } from "@/app/types";

const IMAGE_PLACEHOLDER_BASE_64 =
  "data:image/png;base64,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";

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
        blurDataURL={IMAGE_PLACEHOLDER_BASE_64}
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
