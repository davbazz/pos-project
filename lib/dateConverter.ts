export default function dateConverter(timestamp: string) {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString().slice(-2); // Get the last two digits of the year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based, so add 1
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}.${month}.${year}`;
}
