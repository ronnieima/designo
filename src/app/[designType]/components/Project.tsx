import { Project as TProject } from "@/lib/content";
import Image from "next/image";

export default function Project({ project }: { project: TProject }) {
  return (
    <div className=" bg-lighterPeach flex h-[478px] w-full flex-col rounded-2xl shadow-lg">
      <Image
        src={project.imageUrl}
        alt={project.label}
        width={0}
        height={0}
        sizes="100vw"
        className=" h-2/3 w-full rounded-t-2xl"
      />
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
        <h3 className="text-[20px] uppercase text-peach">{project.label}</h3>
        <p className="text-black">{project.description}</p>
      </div>
    </div>
  );
}
