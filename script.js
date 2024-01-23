// script.js

document.addEventListener('DOMContentLoaded', function() {
  // Function to format the date
  function formatDate(date) {
    const dayOfWeek = date.format('dddd');
    const month = date.format('MMMM');
    const day = date.date();
    const suffix = getDaySuffix(day);

    return `${dayOfWeek}, ${month} ${day}${suffix}`;
  }

  // Function to get the ordinal suffix for date
  function getDaySuffix(day) {
    const j = day % 10;
    const k = day % 100;
    if (j === 1 && k !== 11) {
      return "st";
    }
    if (j === 2 && k !== 12) {
      return "nd";
    }
    if (j === 3 && k !== 13) {
      return "rd";
    }
    return "th";
  }

  // Get current date using Day.js
  const now = dayjs();
  const formattedDate = formatDate(now);

  // Set the formatted date to the 'currentDay' element
  document.getElementById('currentDay').textContent = formattedDate;
});


document.addEventListener('DOMContentLoaded', function() {
    // Loop from 9 to 15 (for hours 9am to 3pm)
    for (let hour = 9; hour <= 17; hour++) {
        let hourKey = `hour-${hour}`; // Key for the hour, e.g., "hour-9"
        let textarea = document.getElementById(hourKey); // Get the textarea element

        // Retrieve value from localStorage
        let storedValue = localStorage.getItem(hourKey);

        if (storedValue) {
            // If there's a stored value for this hour, set it to the textarea
            textarea.value = storedValue;
        } else {
            // Optional: clear the textarea if there's no stored value
            textarea.value = '';
        }
    }
});