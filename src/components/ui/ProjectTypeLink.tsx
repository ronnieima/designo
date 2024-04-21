import { ProjectType } from "@/lib/content";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projectType: ProjectType;
};

export default function ProjectTypeLink({
  projectType: { backgroundUrl, href, label },
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "group h-[250px] w-full rounded-xl bg-cover text-white  sm:h-[200px]  xl:h-[308px] ",
        { "row-span-2 min-h-full": label === "Web Design" },
      )}
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <div
        className={cn(
          "flex h-full w-full flex-col items-center justify-center gap-3 rounded-xl bg-black/70",
          "transition-colors group-hover:bg-peach/70",
        )}
      >
        <h2 className="uppercase">{label}</h2>
        <div className="flex items-center justify-between gap-4">
          <h3>VIEW PROJECTS</h3>
          <Image
            src={"/assets/shared/desktop/icon-right-arrow.svg"}
            width={0}
            height={0}
            className="size-3"
            alt={label}
          />
        </div>
      </div>
    </Link>
  );
}
