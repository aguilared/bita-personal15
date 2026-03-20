import React from "react";

interface AddResourceButtonProps {
  label: string;
  href: string;
  buttonText?: string;
  htmlFor?: string;
}

const AddResourceButton: React.FC<AddResourceButtonProps> = ({
  label,
  href,
  buttonText = "Nuevo",
  htmlFor,
}) => {
  return (
    <div className="flex justify-between items-center mt-2">
      <label
        className="block uppercase tracking-wide text-gray-600 text-xs font-bold"
        htmlFor={htmlFor}
      >
        {label}
      </label>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-[10px] font-bold uppercase py-1 px-2 
                   bg-indigo-50 text-indigo-600 border border-indigo-200 rounded 
                   hover:bg-indigo-600 hover:text-white transition-all duration-200 
                   shadow-sm active:scale-95"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M12 4v16m8-8H4"
          />
        </svg>
        {buttonText}
      </a>
    </div>
  );
};

export default AddResourceButton;
