import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getDaysInMonth = (year: number, month: number) => {
  return dayjs(`${year}-${month}-01`).daysInMonth();
};
