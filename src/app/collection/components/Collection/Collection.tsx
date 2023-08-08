import axiosInstance from "@/api/axiosInstance";
import { Endpoints } from "@/api/endpoints";
import CollectionClientSide from "./Collection.client";

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

  return <CollectionClientSide collection={collection} />;
}
