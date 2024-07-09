import { Figtree } from "next/font/google";

export const baseFont = Figtree({ weight: ["400"], preload: false });
export const boldFont = Figtree({ weight: ["700"], preload: false });

export const linkStyles = `text-base-100 text-lg ${boldFont.className}`;
export const paragraphStyles = 'mb-4 text-lg'