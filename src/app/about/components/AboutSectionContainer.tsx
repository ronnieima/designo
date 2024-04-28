import MaxWidthContainer from "@/components/MaxWidthContainer";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
  variant?: "peach" | "lighterPeach";
  reverseRow?: boolean;
};

export default function AboutSectionContainer({
  className,
  children,
  variant = "lighterPeach",
  reverseRow = false,
}: Props) {
  return (
    <section
      className={cn(
        "h-full ",
        "md:rounded-radius",
        { "bg-peach text-white": variant === "peach" },
        { "bg-lighterPeach": variant === "lighterPeach" },
        className,
      )}
    >
      <MaxWidthContainer
        className={cn("px-0", "xl:flex-row xl:items-stretch", {
          "xl:flex-row-reverse": reverseRow,
        })}
      >
        {children}
      </MaxWidthContainer>
    </section>
  );
}
