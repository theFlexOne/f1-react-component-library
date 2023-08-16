import { twMerge } from "tailwind-merge";
import { useEffect, useRef } from "react";
import { colorContrastFromRGB } from "../helpers/colorUtils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const DEFAULT_BUTTON_COLOR = "blue-500";

const defaultClasses: string[] = [
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

function consolidateButtonClasses(...classes: (string | string[])[]): string {
  const buttonClasses: string[] = twMerge(...classes).split(" ");
  const bgClasses: string[] = buttonClasses.filter((c) => c.includes("bg-"));
  if (bgClasses.length < 1) {
    buttonClasses.push(`bg-${DEFAULT_BUTTON_COLOR}`);
  }
  return buttonClasses.join(" ");
}

const Button = ({ children, className = "", ...props }: ButtonProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  const buttonClasses = consolidateButtonClasses(defaultClasses, className);

  useEffect(() => {
    if (!ref.current) return;
    const bgColor = getComputedStyle(ref.current).backgroundColor;
    const text = colorContrastFromRGB(bgColor);
    ref.current.style.color = text;
  }, []);

  return (
    <button ref={ref} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
