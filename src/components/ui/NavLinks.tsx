import { links } from "@/lib/content";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function NavLinks({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "flex flex-col items-center justify-center gap-8 text-white",
        className,
      )}
    >
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-[14px] uppercase leading-[14px] tracking-[2px]"
        >
          {link.label}
        </Link>
      ))}
    </ul>
  );
}
