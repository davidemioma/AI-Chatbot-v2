import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const reconstructURL = (url: string[]) => {
  const decodedComponent = url.map((str) => decodeURIComponent(str));

  return decodedComponent.join("//");
};
