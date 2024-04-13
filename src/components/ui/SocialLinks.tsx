import { socials } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SocialLinks() {
  return (
    <ul className="flex items-center justify-center gap-4">
      {socials.map((social) => (
        <Link key={social.label} href={social.href} target="_blank">
          <Image
            src={social.imageUrl}
            alt={social.label}
            width={24}
            height={24}
          />
        </Link>
      ))}
    </ul>
  );
}
