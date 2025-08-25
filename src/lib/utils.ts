import React from "react";
import type { IconType } from "react-icons";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Mail, Link } from 'lucide-react';
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const iconMap: Record<string, IconType> = {
  github: SiGithub,
  linkedin: SiLinkedin,
  link: Link,
  email: Mail
};

export function getDynamicIcon(label: string) {
  const Icon = iconMap[label.toLowerCase()];
  if (!Icon) return null;

  return React.createElement(Icon, { className: "text-[currentColor]", size: 20 });

}