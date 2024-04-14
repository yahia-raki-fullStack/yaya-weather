function convertDateEpochToDate(dateEpoch) {
  // Convert the date epoch to milliseconds
  const milliseconds = dateEpoch * 1000;

  // Create a new Date object using the milliseconds
  const date = new Date(milliseconds);

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const dayOfWeek = date.getDay();

  // Define an array of day names
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Return the day name corresponding to the day of the week
  return days[dayOfWeek];
}
export default convertDateEpochToDate;
