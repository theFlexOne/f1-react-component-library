import { useState } from "react";

interface SelectProps {
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const Select = ({ options }: SelectProps) => {
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col min-w-[200px] relative">
      <select value={selected.value} className="hidden">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="pl-4 font-bold text-lg border rounded-md bg-zinc-100 text-zinc-900 cursor-pointer select-none flex items-center"
      >
        <p>{selected.label}</p>
        <span
          className="material-symbols-outlined ml-auto text-4xl text-blue-500 font-thin transition-all"
          style={{
            rotate: isOpen ? "90deg" : "0deg",
          }}
        >
          arrow_right
        </span>
      </div>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="flex flex-col text-md bg-sky-950 text-zinc-100 absolute top-full w-full border rounded-md overflow-hidden"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => setSelected(option)}
              className="flex bg-zinc-800 hover:bg-blue-500 cursor-pointer border-b last:border-b-0"
            >
              <div
                style={{
                  backgroundColor:
                    option.value === selected.value
                      ? "rgba(200,200,255, 0.25)"
                      : "transparent",
                }}
                className="flex grow w-max"
              >
                <p className=" px-2 py-1">{option.label}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
