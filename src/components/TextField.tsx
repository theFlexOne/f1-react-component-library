import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TextFieldProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const defaultInputClasses = [
  "border",
  "border-gray-300",
  "px-2",
  "py-1",
  "rounded-md",
  "focus:outline-none",
  "focus:ring-2",
  "focus:ring-blue-500",
  "focus:border-transparent",
];

const defaultLabelClasses = [
  "absolute",
  "top-2",
  "left-2",
  "bg-white",
  "px-1",
  "text-gray-400",
  "text-sm",
  "pointer-events-none",
  "peer-data-[empty=false]:-top-3",
  "peer-data-[empty=false]:text-xs",
  "peer-focus:text-blue-500",
  "peer-focus:-top-3",
  "peer-focus:text-xs",
  "transition-all",
  "duration-200",
];

const TextField = ({
  label,
  className,
  value: oldVal,
  onChange: oldOnChange,
  ...rest
}: TextFieldProps) => {
  const [value, setValue] = useState(oldVal || "");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    oldOnChange && oldOnChange(e);
  }

  return (
    <div className="relative">
      <input
        data-empty={!value}
        value={value}
        onChange={onChange}
        className={twMerge(defaultInputClasses, className, "peer")}
        {...rest}
      />
      {label && <label className={twMerge(defaultLabelClasses)}>{label}</label>}
    </div>
  );
};

export default TextField;
