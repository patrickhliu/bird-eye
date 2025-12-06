import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getQueryParams = (url: string) => {
  return Object.fromEntries(new URL(url).searchParams)
}

export function getFormattedDate(date:Date) {
  var year = date.getFullYear();

  var month = (1 + date.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;

  var day = date.getDate().toString();
  day = day.length > 1 ? day : '0' + day;

  return month + '/' + day + '/' + year;
}

export function convertTZ(date:Date, tzString:string) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));
}