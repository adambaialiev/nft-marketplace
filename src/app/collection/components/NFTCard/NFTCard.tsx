"use client";

import Image from "next/image";
import { NFTItem } from "../Collection/Collection";

interface NFTCardProps {
  nft: NFTItem;
}

export default function NFTCard({ nft }: NFTCardProps) {
  const { name, fileUrl, tag } = nft;
  return (
    <div className="relative group">
      <Image alt={name} src={fileUrl} width={312} height={468} />
      <div className="invisible group-hover:visible absolute top-0 bottom-0 right-0 left-0 flex flex-col items-center justify-between p-[20%] bg-black-transparent">
        <div>
          <div className="bg-orange2 text-orange text-[10px] p-[5px] rounded-[5px] flex items-center justify-center uppercase">
            {tag}
          </div>
          <span className="text-white text-[32px]">{name}</span>
        </div>
        <button className="border border-orange py-2.5 px-5 text-orange">
          PURCHASE
        </button>
      </div>
    </div>
  );
}
