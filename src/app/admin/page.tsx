import Header from "../_components/Header/Header";
import NftUploadForm from "./components/NftUploadForm/NftUploadForm";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="flex flex-auto justify-center">
        <NftUploadForm />
      </div>
    </main>
  );
}
