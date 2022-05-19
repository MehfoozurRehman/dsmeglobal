export function getText(html) {
  var divContainer = document.createElement("div");
  divContainer.innerHTML = html;
  return divContainer.textContent || divContainer.innerText || "";
}
export function parseDate(date) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date && date.replace(/-/g, "").substring("", 4);
  const month =
    date && date.replace(/-/g, "").substring("", 6).replace(year, "");
  const day =
    date &&
    date
      .replace(/-/g, "")
      .substring("", 8)
      .replace(year + month, "");
  return (
    day +
    " - " +
    months.filter((item, i) => i === parseInt(month) - 1) +
    " - " +
    year
  );
}
