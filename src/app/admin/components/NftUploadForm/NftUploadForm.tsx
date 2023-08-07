"use client";
import { Form, Formik } from "formik";
import Input from "../Input/Input";
import FileInput from "../FileInput/FileInput";
import * as Yup from "yup";
import axiosInstance from "@/api/axiosInstance";
import axios, { AxiosResponse } from "axios";
import { Endpoints } from "@/api/endpoints";
import { useState } from "react";

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
  filename: Yup.string().required("Required"),
});

export interface UploadUrlResponse {
  uploadUrl: string;
  key: string;
}

export const getExtensionFromFilename = (fileName: string) =>
  fileName.split(".").pop();

export default function NftUploadForm() {
  const initialValues: FormValues = { name: "", tag: "", filename: "" };

  const [progress, setProgress] = useState<number | undefined>();

  const onDrop = async (file: File) => {
    try {
      const { name, type } = file;
      const extension = getExtensionFromFilename(name);
      console.log({ extension });
      const { uploadUrl, key } = await axiosInstance
        .post<any, AxiosResponse<UploadUrlResponse>>(Endpoints.GetUploadUrl, {
          extension,
          contentType: type,
        })
        .then((res) => res.data);

      console.log({ uploadUrl, key });

      await axios.put(uploadUrl, new File([file], key, { type: file.type }), {
        headers: {
          "Content-Type": type,
          "Content-Disposition": `attachment; filename="${key}"`,
        },
        onUploadProgress: (progressEvent) => {
          console.log({ progressEvent });
          setProgress(progressEvent.progress);
        },
      });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={async (values) => {
        console.log({ values });
      }}
    >
      {({ isSubmitting, isValid }) => {
        const isCreateDisabled = isSubmitting || !isValid || progress !== 1;
        return (
          <Form>
            <Input name="name" label="Name" placeholder="Enter name" />
            <Input name="tag" label="Tag" placeholder="Enter tag" />
            <FileInput onDrop={onDrop} name="filename" progress={progress} />
            <button
              className={`text-orange py-2 px-4 ${
                isCreateDisabled ? "opacity-60" : ""
              }`}
              type="submit"
              disabled={isCreateDisabled}
            >
              Create
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
