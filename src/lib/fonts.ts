import { Geist, Stack_Sans_Notch, Urbanist } from "next/font/google";

export const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: "variable"
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"]
});

export const stackSansNotch = Stack_Sans_Notch({
  subsets: ["latin"],
  variable: "--font-stack-sans-notch",
  display: "swap",
  weight: "variable"
});

export const fontVariables = [geist.variable, urbanist.variable, stackSansNotch.variable].join(" ");
