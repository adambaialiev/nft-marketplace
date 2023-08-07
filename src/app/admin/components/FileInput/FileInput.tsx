"use client";

import { useField } from "formik";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileInputProps {
  onDrop: (file: File) => void;
  progress?: number;
}

export default function FileInput({ onDrop, progress }: FileInputProps) {
  const [fileNameField, fileNameMeta, fileNameHelpers] = useField({
    name: "fileName",
  });
  const [fileKeyField, fileKeyMeta, fileKeyHelpers] = useField({
    name: "fileKey",
  });

  const onDropCallback = useCallback((acceptedFiles: File[]) => {
    console.log({ acceptedFiles });
    const file = acceptedFiles[0];
    if (file) {
      onDrop(file);
      fileNameHelpers.setValue(file.name);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropCallback,
    multiple: false,
  });

  const getProgress = () => {
    if (typeof progress === "undefined") {
      return "";
    }
    const percent = progress * 100;
    return `Upload progress: ${Math.floor(percent)}%`;
  };
  return (
    <div
      {...getRootProps()}
      className=" p-2.5 border-dashed border-white border-2"
    >
      <input {...getInputProps()} />
      <p className="text-white">
        {fileNameField.value
          ? fileNameField.value
          : "Drag 'n' drop some files here, or click to select files"}
      </p>
      {typeof progress !== "undefined" ? (
        <p className="text-white">{getProgress()}</p>
      ) : null}
      {fileKeyMeta.touched && fileKeyMeta.error ? (
        <div className="text-red-500 text-xs italic">{fileKeyMeta.error}</div>
      ) : null}
    </div>
  );
}
