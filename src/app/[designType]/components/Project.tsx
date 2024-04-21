import { Project as TProject } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Project({ project }: { project: TProject }) {
  return (
    <Link
      href={"/contact"}
      className={cn(
        "bg-lighterPeach group flex h-[478px] w-full flex-col rounded-2xl shadow-lg ",
        "transition-colors hover:bg-peach",
        "md:h-[310px]  md:flex-row",
        "xl:h-[478px] xl:w-full xl:flex-col",
      )}
    >
      <Image
        src={project.imageUrl}
        alt={project.label}
        width={0}
        height={0}
        sizes="100vw"
        style={{ objectFit: "cover" }}
        className={cn(
          " h-2/3 w-full rounded-t-2xl",
          "md:h-full md:w-1/2 md:rounded-l-2xl md:rounded-r-none",
          "xl:h-2/3 xl:w-full xl:rounded-b-none xl:rounded-t-2xl",
        )}
      />
      <div
        className={cn(
          "flex h-full flex-col items-center justify-center gap-4 p-8 text-center",
          "md:w-1/2",
          "xl:w-full",
        )}
      >
        <h3
          className={cn(
            "text-[20px] uppercase text-peach",
            "group-hover:text-white",
          )}
        >
          {project.label}
        </h3>
        <p className={cn("text-black", "group-hover:text-white")}>
          {project.description}
        </p>
      </div>
    </Link>
  );
}
