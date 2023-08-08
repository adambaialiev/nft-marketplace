"use client";
import useAuthStore from "@/app/_store/useAuthStore";
import NftUploadForm from "../NftUploadForm/NftUploadForm";

export default function NftUploadFormGuard() {
  const ethAddress = useAuthStore((state) => state.address);
  return ethAddress ? (
    <NftUploadForm />
  ) : (
    <div className="p-10">
      <span className="text-white">Please sign in to upload NFTs</span>
    </div>
  );
}
