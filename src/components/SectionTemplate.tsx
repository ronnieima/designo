"use client";
import MaxWidthContainer from "@/components/MaxWidthContainer";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, {
  createContext,
  PropsWithChildren,
  ReactNode,
  useContext,
} from "react";

const SectionTemplateContext = createContext(null);

function useSectionContext() {
  const context = useContext(SectionTemplateContext);
  if (!context) {
    throw new Error(
      "Section compound components must be rendered within the SectionTemplate component",
    );
  }
  return context;
}

type Props = {
  className?: string;
  children: ReactNode;
  variant?: "peach" | "lighterPeach";
  reverseRow?: boolean;
};

export default function SectionTemplate({
  className,
  children,
  variant = "lighterPeach",
  reverseRow = false,
}: Props) {
  return (
    <SectionTemplateContext.Provider value={null}>
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
    </SectionTemplateContext.Provider>
  );
}

function Picture({ children }: PropsWithChildren) {
  return (
    <picture className="w-full xl:w-auto xl:min-w-[476px]">{children}</picture>
  );
}

function Content({ children }: PropsWithChildren) {
  return (
    <div
      className={cn(
        "md:rounded-b-border relative flex h-full w-full flex-col items-center justify-center gap-6 overflow-clip px-6 py-20 text-center ",
        "xl:items-start xl:px-[96px] xl:py-[154px] xl:text-left",
      )}
    >
      {children}
    </div>
  );
}

function Header({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <h2 className={cn(className)}>{children}</h2>;
}

function Description({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

function BackgroundPattern({ className }: { className?: string }) {
  return (
    <Image
      src={"/assets/shared/desktop/bg-pattern-three-circles.svg"}
      alt="three circles"
      width={0}
      height={0}
      style={{ objectFit: "cover" }}
      className={cn(
        "absolute h-full w-full",
        " left-0 top-0 size-[584px]",
        "xl:-left-1/4 xl:bottom-0 xl:top-auto",
        className,
      )}
    />
  );
}

SectionTemplate.Picture = Picture;
SectionTemplate.Content = Content;
SectionTemplate.Header = Header;
SectionTemplate.Description = Description;
SectionTemplate.BackgroundPattern = BackgroundPattern;
