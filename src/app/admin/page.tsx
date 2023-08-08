import Header from "../collection/components/Header/Header";
import NftUploadFormGuard from "./components/NftUploadFormGuard/NftUploadFormGuard";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="flex flex-auto justify-center">
        <NftUploadFormGuard />
      </div>
    </main>
  );
}
