export function rawDateFormater(dateRaw) {
  return dateRaw.replace(/T/, " ").replace(/\..+/, "").replace("00:00:00", "");
}
