loadJS('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js', () =>
{
	loadJS('https://cdnjs.cloudflare.com/ajax/libs/moment-timezone/0.5.34/moment-timezone-with-data-10-year-range.min.js', () =>
	{
		// Set target dates and elements for each countdown section
		const countdownSectionsUpdated = document.querySelectorAll(".countdown_timer_updated");

		countdownSectionsUpdated.forEach((section) => {
			const targetDate = moment.tz(section.getAttribute("data-target-date"), section.getAttribute("data-target-time-zone")).utc();
			const targetDateNext = moment.tz(section.getAttribute("data-target-date-next"), section.getAttribute("data-target-time-zone")).utc();
			const targetElement = section.querySelector(".countdown_block");
			createCountdownTimerUpdated(targetDate, targetDateNext, targetElement);
		});
	})
})

function createCountdownTimerUpdated(targetDate, targetDateNext, targetElement) {
	// Update the countdown every 1 second
	const countdownInterval = setInterval(function () {
		const currentDate = moment.utc();
		let timeRemaining = targetDate - currentDate;

		if (timeRemaining <= 0) {
			timeRemaining = targetDateNext - currentDate;
		}

		if (timeRemaining <= 0) {
			// Countdown has ended
			clearInterval(countdownInterval);
			targetElement.querySelector(".theTimer").innerHTML = "Countdown Expired!";
		} else {
			// Calculate days, hours, minutes, and seconds
			const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
			const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

			// Update the countdown display for the target element
			targetElement.querySelector(".theTimer").innerHTML =
				`<span data-name="days">${padZeroesUpdated(days)}</span> <span class="dots">:</span> <span data-name="hours">${padZeroesUpdated(hours)}</span> <span class="dots">:</span> <span data-name="minutes">${padZeroesUpdated(minutes)}</span> <span class="dots">:</span> <span data-name="seconds">${padZeroesUpdated(seconds)}</span>`;
		}
	}, 1000);
}

function padZeroesUpdated(num) {
  return num < 10 ? "0" + num : num;
}