import { ParsedDatabseItemType } from "@/utils/parseDatabaseItems";
import Image from "next/image";
import React from "react";

interface IconRendererProps {
  icon: ParsedDatabseItemType["icon"];
}

const IconRenderer = ({ icon }: IconRendererProps) => {
  if (!icon) return null;
  if (icon.type === "emoji") return <span>{icon.emoji}</span>;

  const iconUrl = icon.type === "file" ? icon.file.url : icon.external.url;
  return (
    <Image
      src={iconUrl}
      alt="icon"
      width={28}
      height={28}
      className="rounded-full"
    />
  );
};

export default IconRenderer;
