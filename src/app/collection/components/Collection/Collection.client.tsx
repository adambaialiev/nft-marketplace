"use client";
import useCardSizeStore from "@/app/_store/useCardSizeStore";
import NFTCard from "../NFTCard/NFTCard";
import { NFTItem } from "./Collection";
import { CardSize } from "@/app/types";

interface CollectionClientSideProps {
  collection: NFTItem[];
}

const getGridClassesForSize = (size: CardSize) => {
  switch (size) {
    case "L":
      return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    case "M":
      return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
    case "S":
      return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";
    default:
      throw new Error("Wrong size");
  }
};

export default function CollectionClientSide({
  collection,
}: CollectionClientSideProps) {
  const cardSize = useCardSizeStore((state) => state.cardSize);
  return (
    <div
      className={`p-10 grid justify-items-center gap-y-[69px] ${getGridClassesForSize(
        cardSize
      )}`}
    >
      {collection.map((nft) => (
        <NFTCard key={nft.id} nft={nft} cardSize={cardSize} />
      ))}
    </div>
  );
}
