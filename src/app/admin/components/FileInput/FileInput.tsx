"use client";
import { useField } from "formik";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

interface FileInputProps {
  onDrop: (file: File) => void;
  progress?: number;
  uploadHasStarted: boolean;
}

export default function FileInput({
  onDrop,
  progress,
  uploadHasStarted,
}: FileInputProps) {
  const [fileNameField, , fileNameHelpers] = useField({
    name: "fileName",
  });
  const [, fileKeyMeta] = useField({
    name: "fileKey",
  });

  const onDropCallback = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (file) {
        onDrop(file);
        fileNameHelpers.setValue(file.name);
      }
    },
    [fileNameHelpers, onDrop]
  );

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
      className=" p-2.5 border-dashed border-white border-2 cursor-pointer"
    >
      <input {...getInputProps()} />
      <p className="text-white">
        {fileNameField.value
          ? fileNameField.value
          : "Drag 'n' drop some files here, or click to select files"}
      </p>
      {typeof progress === "undefined" && uploadHasStarted ? (
        <p className="text-white">File upload has started...</p>
      ) : null}
      {typeof progress !== "undefined" ? (
        <p className="text-white">
          {progress < 1 ? getProgress() : "Uploaded successfully"}
        </p>
      ) : null}
      {fileKeyMeta.touched && fileKeyMeta.error ? (
        <div className="text-red-500 text-xs italic">{fileKeyMeta.error}</div>
      ) : null}
    </div>
  );
}
