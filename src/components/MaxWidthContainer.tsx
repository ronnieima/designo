import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MaxWidthContainer({ children, className }: Props) {
  return (
    <div
      className={cn(
        "flex max-w-[640px] flex-col items-center justify-center px-4",
        className,
      )}
    >
      {children}
    </div>
  );
}
