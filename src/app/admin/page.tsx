import Header from "../collection/components/Header/Header";
import { Formik, Field, Form, ErrorMessage } from "formik";
import Input from "./components/Input/Input";
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
