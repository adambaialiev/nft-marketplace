import axiosInstance from "@/api/axiosInstance";
import { Endpoints } from "@/api/endpoints";
import NFTCard from "../NFTCard/NFTCard";

export interface NFTItem {
  fileUrl: string;
  createdAt: string;
  id: string;
  name: string;
  tag: string;
}

export default async function Collection() {
  const collection = await axiosInstance
    .get<NFTItem[]>(Endpoints.NFT)
    .then((res) => res.data);

  return (
    <div className="grid grid-cols-4">
      {collection.map((nft) => (
        <NFTCard key={nft.id} nft={nft} />
      ))}
    </div>
  );
}
