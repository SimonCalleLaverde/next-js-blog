import { parseISO, format } from "date-fns";

// Date Component (Formatting the "Date")
export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={ dateString }>{ format(date, 'LLLL d, yyyy') }</time>
};