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
        "mx-auto flex max-w-[689px] xl:max-w-[1111px] flex-col items-center justify-center px-6 sm:px-0 ",
        className,
      )}
    >
      {children}
    </div>
  );
}
