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
  fileName: string;
  fileKey: string;
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
  fileKey: Yup.string().required("Required"),
});

export interface UploadUrlResponse {
  uploadUrl: string;
  key: string;
}

export const getExtensionFromFilename = (fileName: string) =>
  fileName.split(".").pop();

export default function NftUploadForm() {
  const initialValues: FormValues = {
    name: "",
    tag: "",
    fileName: "",
    fileKey: "",
  };

  const [progress, setProgress] = useState<number | undefined>();
  const [uploadHasStarted, setUploadHasStarted] = useState(false);

  const onDrop =
    (setFileKeyValue: (key: string) => void) => async (file: File) => {
      try {
        setUploadHasStarted(true);
        const { name, type } = file;
        const extension = getExtensionFromFilename(name);

        const { uploadUrl, key } = await axiosInstance
          .post<any, AxiosResponse<UploadUrlResponse>>(Endpoints.GetUploadUrl, {
            extension,
            contentType: type,
          })
          .then((res) => res.data);

        await axios.put(uploadUrl, new File([file], key, { type: file.type }), {
          headers: {
            "Content-Type": type,
            "Content-Disposition": `attachment; filename="${key}"`,
          },
          onUploadProgress: (progressEvent) => {
            setProgress(progressEvent.progress);
          },
        });
        setFileKeyValue(key);
      } catch (error) {
        setProgress(undefined);
        setUploadHasStarted(false);
        console.log({ error });
      }
    };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={async ({ name, tag, fileKey }, { resetForm }) => {
        try {
          await axiosInstance.post(Endpoints.NFT, {
            name,
            tag,
            fileKey,
          });
          resetForm();
          setUploadHasStarted(false);
          setProgress(undefined);
          alert("NFT was uploaded successfully");
        } catch (error) {
          console.log({ error });
        }
      }}
    >
      {({ isSubmitting, isValid, setFieldValue }) => {
        const isCreateDisabled = isSubmitting || !isValid || progress !== 1;
        const setFileKeyValue = (value: string) =>
          setFieldValue("fileKey", value);

        return (
          <Form className="w-full sm:w-full md:w-96 flex flex-col mt-3.5">
            <Input name="name" label="Name" placeholder="Enter name" />
            <Input name="tag" label="Tag" placeholder="Enter tag" />
            <FileInput
              onDrop={onDrop(setFileKeyValue)}
              progress={progress}
              uploadHasStarted={uploadHasStarted}
            />
            <button
              className={`text-orange mt-2.5 self-center py-2 px-4 ${
                isCreateDisabled ? "opacity-60" : ""
              }`}
              type="submit"
              disabled={isCreateDisabled}
            >
              {isSubmitting ? "Loading" : "Create"}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
}
