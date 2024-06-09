import { MouseEventHandler } from "react";

import { cn } from "@/lib/utils";

interface IconButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  children: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition",
        className
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
