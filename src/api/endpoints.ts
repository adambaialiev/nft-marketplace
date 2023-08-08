export enum Endpoints {
  GetUploadUrl = "/nft/upload-url",
  NFT = "/nft",
}

export const buildNftCollectionEndpoint = () =>
  `${process.env.NEXT_PUBLIC_BE_ENDPOINT}/${Endpoints.NFT}`;
