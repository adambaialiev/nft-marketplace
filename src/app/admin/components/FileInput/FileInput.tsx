"use client";

import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function FileInput() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log({ acceptedFiles });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });
  return (
    <div
      {...getRootProps()}
      className="h-10 border-dashed border-white border-2"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p className="text-white">Drop the files here ...</p>
      ) : (
        <p className="text-white">
          Drag 'n' drop some files here, or click to select files
        </p>
      )}
    </div>
  );
}
