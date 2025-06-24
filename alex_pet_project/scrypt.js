// JavaScript (scrypt.js)
document.addEventListener("DOMContentLoaded", function() {
	// Header nav injection (optional)
	var header = document.getElementById("header");
	if (header) {
			header.innerHTML = `
					<nav>
							<ul class="nav-list">
									<li><a href="./index.html" class="nav-link">Home</a></li>
									<li><a href="./about.html" class="nav-link">About</a></li>
									<li><a href="./contact.html" class="nav-link">Contact</a></li>
							</ul>
					</nav>
			`;
	}

	
});

function validateTwoDigits(input) {
	input.value = input.value.replace(/\D/g, '');
	if (input.value.length > 2) {
			input.value = input.value.slice(0, 2);
	}
}

function calculateTime() {
	const begin_hours = Number(document.getElementById("start_hours").value);
	const begin_minutes = document.getElementById("start_minutes").value;
	const end_hours = Number(document.getElementById("end_hours").value);
	const end_minutes = document.getElementById("end_minutes").value;
	const resultElem = document.getElementById("result_time_calculation");

	// Validation
	if (
			isNaN(begin_hours) || isNaN(Number(begin_minutes)) ||
			isNaN(end_hours) || isNaN(Number(end_minutes)) ||
			begin_minutes === "" || end_minutes === "" ||
			begin_hours < 0 || begin_hours > 23 ||
			Number(begin_minutes) < 0 || Number(begin_minutes) > 59 ||
			end_hours < 0 || end_hours > 23 ||
			Number(end_minutes) < 0 || Number(end_minutes) > 59
	) {
			resultElem.innerHTML = '<span style="color: red;">Please fill in all fields with valid numbers.</span>';
			return;
	}

	// Calculate begin and end in decimal hours
	let begin = begin_hours;
	if (begin_minutes !== "0" && begin_minutes !== "00") {
			begin += Number(begin_minutes) / 60;
	}
	let end = end_hours;
	if (end_minutes !== "0" && end_minutes !== "00") {
			end += Number(end_minutes) / 60;
	}

	// Calculate total time
	let total = end - begin;
	if (total < 0) {
			total += 24; // handle overnight
	}

	// Output result
	resultElem.innerHTML = "Total time: " + total.toFixed(2);
}

function resetTime() {
	document.getElementById("start_hours").value = "";
	document.getElementById("start_minutes").value = "";
	document.getElementById("end_hours").value = "";
	document.getElementById("end_minutes").value = "";
	document.getElementById("result_time_calculation").innerHTML = "Enter your time to calculate.";
}

