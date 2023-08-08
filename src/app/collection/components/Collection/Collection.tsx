import axiosInstance from "@/api/axiosInstance";
import { Endpoints } from "@/api/endpoints";
import CollectionClientSide from "./Collection.client";
import { NFTItem } from "@/app/types";

export default async function Collection() {
  const collection = await axiosInstance
    .get<NFTItem[]>(Endpoints.NFT)
    .then((res) => res.data);

  return <CollectionClientSide collection={collection} />;
}
