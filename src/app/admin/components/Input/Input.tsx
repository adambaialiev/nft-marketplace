import { Field, useField } from "formik";

interface InputProps {
  name: string;
  placeholder: string;
  label: string;
}

export default function Input({ name, placeholder, label }: InputProps) {
  const [field, meta, helpers] = useField({ name, placeholder });
  console.log({ meta });
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input {...field} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-xs italic">{meta.error}</div>
      ) : null}
    </div>
  );
}
