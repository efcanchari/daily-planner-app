# Work Day Scheduler

## Overview
The Work Day Scheduler is a simple calendar application designed for scheduling your workday. It allows users to save hourly appointments or tasks in a user-friendly interface. The application uses local storage to persist the data, so the users' inputs are saved even after the page is refreshed.

## Features
- Display the current day at the top of the calendar with the format "Monday, December 13th".
- Hourly time blocks from 9 AM to 5 PM where users can enter and save their tasks or appointments.
- Past, present, and future time blocks are color-coded to indicate whether the time slot is in the past, the present, or the future.
- Users can save their appointments or tasks in each time block, and the data is persisted in the browser's local storage.
  
## Technologies Used
- HTML
- CSS
- JavaScript
- Bootstrap 5.3.0-alpha3
- FontAwesome 5.8.1
- Day.js
- jQuery 3.2.1

## Key Functions

### `showMessageRow()`
Shows the message row that notifies users when an appointment is added to the local storage. It removes the `d-none` class from the message row, making it visible.

### `hideMessageRow()`
Hides the message row that notifies users when an appointment is added. It adds the `d-none` class to the message row, making it invisible.

### `saveHourData(button)`
Triggered when the save button is clicked. It retrieves the `data-hour` attribute from the button, fetches the value from the corresponding textarea, and saves it in local storage. It also calls `showMessageRow()` to display a confirmation message to the user.

### `initializeCurrentDay()`
Displays the current day at the top of the calendar. It formats the current date using Day.js and updates the `currentDay` element's text content.

### `updateTimeBlocks()`
Called when the page is loaded. It loops through the time blocks and updates their classes based on the current time. Past hours are marked with the `past` class, the current hour with the `present` class, and future hours with the `future` class.

## How to Use
1. Open `index.html` in your browser.
2. Scroll to the time block for the current hour. The application will color-code the time blocks based on whether the time is in the past (grey), present (red), or future (green).
3. Click into a time block and enter an event or task.
4. Click the save button on the right side of the time block to save the event or task in local storage.
5. Refresh the page or revisit it later. The saved events/tasks will persist.

## Local Development
For local development, you can clone this repository and open `index.html` in your browser.

