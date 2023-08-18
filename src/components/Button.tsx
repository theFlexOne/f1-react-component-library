import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";
import { colorContrastFromRGB } from "../helpers/colorUtils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const defaultClasses: string[] = [
  "bg-blue-500",
  "hover:bg-blue-600",
  "font-bold",
  "py-2",
  "px-4",
  "rounded",
  "shadow-md",
  "focus:outline-none",
  "focus:shadow-sm",
  "hover:shadow-sm",
  "active:scale-95",
  "active:shadow-none",
  "transition",
  "duration-100",
  "ease-in-out",
];

const Button = ({ children, className = "", ...rest }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const buttonClasses = twMerge(defaultClasses, className);

  useEffect(() => {
    if (!ref.current) return;
    setTextColor(ref.current);
  }, []);

  return (
    <button ref={ref} className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

function setTextColor(el: HTMLButtonElement) {
  const bgColor = getComputedStyle(el).backgroundColor;
  const text = colorContrastFromRGB(bgColor);
  el.style.color = text;
}

export default Button;
