import axiosInstance from "@/api/axiosInstance";
import { Endpoints, buildNftCollectionEndpoint } from "@/api/endpoints";
import CollectionClientSide from "./Collection.client";
import { NFTItem } from "@/app/types";

export default async function Collection() {
  const response = await fetch(buildNftCollectionEndpoint(), {
    cache: "no-store",
  });
  const collection = (await response.json()) as NFTItem[];

  return <CollectionClientSide collection={collection} />;
}
