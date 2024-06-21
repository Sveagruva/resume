import {DateTime} from "luxon";


export const resolveTimeStr = (timeStr: string) => {
  const date = DateTime.fromFormat(timeStr, "yyyy-MM");
  if (timeStr === "_current_") {
    return "настоящее время";
  }

  if(!date.isValid) {
    throw new Error(`Invalid date: ${timeStr}`);
  }

  // russian month name
  return date.toFormat("MMMM yyyy", {locale: "ru"});
}
