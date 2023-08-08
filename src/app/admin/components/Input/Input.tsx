import { Field, useField } from "formik";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
}

export default function Input({ name, placeholder, label }: InputProps) {
  const [field, meta] = useField({ name, placeholder });
  return (
    <div className="flex flex-1 flex-col mb-2.5">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input
        {...field}
        className="bg-black2 text-white px-2.5 py-2.5 outline-none"
      />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs mt-0.5">{meta.error}</div>
      ) : null}
    </div>
  );
}
