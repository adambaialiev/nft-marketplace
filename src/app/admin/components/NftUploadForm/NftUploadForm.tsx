"use client";
import { Form, Formik } from "formik";
import Input from "../Input/Input";
import FileInput from "../FileInput/FileInput";
import * as Yup from "yup";

interface FormValues {
  name: string;
  tag: string;
  filename: string;
}

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
  tag: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("Required"),
});

export default function NftUploadForm() {
  const initialValues: FormValues = { name: "", tag: "", filename: "" };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={(values) => {
        console.log({ values });
      }}
    >
      <Form>
        <Input name="name" label="Name" placeholder="Enter name" />
        <Input name="tag" label="Tag" placeholder="Enter tag" />
        <FileInput />
        <button className="text-orange py-2 px-4" type="submit">
          Upload
        </button>
      </Form>
    </Formik>
  );
}
