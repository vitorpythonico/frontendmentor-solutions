const months = {
	1: 31,
	2: 28,
	3: 31,
	4: 30,  
	5: 31,
	6: 30,  
	7: 31,
	8: 31,
	9: 30,
	10: 31,
	11: 30,
	12: 31,
}

function main() {
	const date = getDate();
	const emptyValues = checkEmptyValues(date);
	const invalidValues = checkInvalidValues(date)

	if (emptyValues != '') {
		errorEmptyValues(emptyValues)
	} 

	if (invalidValues != '') {
		errorInvalidValues(invalidValues)
	
	} 
	if (emptyValues == '' && invalidValues == '') {
		calculateAge(date) 
	}

};

function getDate() {

	const day = document.querySelector('#day').value;
	const month = document.querySelector('#month').value;
	const year = document.querySelector('#year').value;

	const date = {day, month, year};
	return date

};

function checkEmptyValues(date) {

	let emptyValues = [];
	
	for (value in date) {
		if ( (date[value] === '') ) {
			emptyValues.push(value)
		};
	}
	return emptyValues;
};

function generateErrorMessage(el_name, msg) {
	let el_id = '#' + el_name
	const element = document.querySelector(el_id);

	if (element.nextElementSibling === null) {

		messageElement = document.createElement('p');
		messageElement.innerText = msg;
		messageElement.classList.add('error-message');

		element.parentElement.append(messageElement);
		element.addEventListener('click', restart);
	}
}

function errorEmptyValues(values) {

	for (el in values) {
		const element = document.querySelector('#' + values[el]);

		if (element.nextElementSibling === null) {
			generateErrorMessage(values[el], 'This field is required')
		}
	}	
};

function restart(event) {
	const el = event.currentTarget;
	el.removeEventListener('click', restart);

	el.style.border = '1px solid hsl(0, 0%, 86%)';
	el.previousElementSibling.style.color = 'hsl(0, 1%, 44%)';
	el.nextElementSibling.remove();
};

function checkInvalidValues(date) {
	let invalidValues = []
	const dateObj = new Date()
	let currentYear = dateObj.getFullYear()

	//refactor

	date.month = date.month[0] == '0' ? date.month.slice(1,2) : date.month
	date.day = date.day[0] == '0' ? date.day.slice(1,2) : date.day

	if (date.day > months) {
		// check leap year
		if ( !( (date.month == 2 && date.day == 29) && (date.year % 4 === 0 && date.year % 100 !== 0) || date.year % 400 == 0 ) ) {
			invalidValues.push('date');
		}
	}

	if ( date.day > 31 || date.day > months[date.month])  {
		invalidValues.push('day')
	}

	// example: 00011 or 00 is invalid
	if (date.month.length > 2 || date.month == '00') {
			invalidValues.push('month')
	// 0 < date.month <= 12
	} else if (date.month < 0 || date.month > 12) {
			invalidValues.push('month')
	}

	if ( (date.year >= currentYear) ) {
		invalidValues.push('year')
	}

	return invalidValues

}

function errorInvalidValues(values) {
	// add filters for numbers only

	values.forEach(el => {
	switch (el) {
			case 'month':
				generateErrorMessage(el, 'Must be a valid month');
				break;
			case 'date': 
				generateErrorMessage('day', 'Must be a valid date');
				break;
			case 'day':  
				generateErrorMessage(el, 'Must be a valid day');
				break;
			case 'year':
				generateErrorMessage(el, 'Must be in the past');
				break
		}
	})

}

function calculateAge(date) {
	const dateObj = new Date();
	const currentYear = dateObj.getFullYear();
	const currentMonth = dateObj.getMonth() + 1;
	const currentDay = dateObj.getDate();

	// begin - algorithm
	let totalYears = currentYear - date.year;

	// birthday
	if (date.month == currentMonth && date.day == currentDay) {
		totalYears += 1;
	}

	if (date.month <= currentMonth) {
		totalMonths = currentMonth - date.month;
	} else {
		totalMonths = 12 - date.month + currentMonth;
	}

	if (date.day <= currentDay) {
		totalDays = currentDay - date.day;
	} else {
		totalDays = months[currentMonth - 1] - date.day + currentDay;
	}
	// end - algorithm

	document.querySelector('#result-years').innerText = totalYears;
	document.querySelector('#result-months').innerText = totalMonths;
	document.querySelector('#result-days').innerText = totalDays;
}

button = document.querySelector('#calculate_btn');
button.addEventListener('click', main);
