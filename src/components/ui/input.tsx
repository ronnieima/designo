import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "file:bg-transparent disabled:opacity-50xwx  flex h-10 w-full border-b-[1px] border-white bg-white bg-opacity-0 px-3 py-2  text-sm transition-all file:border-0 file:text-sm  file:font-medium placeholder:text-lightGray/70 hover:cursor-pointer hover:border-b-[3px] hover:text-white disabled:cursor-not-allowed",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
