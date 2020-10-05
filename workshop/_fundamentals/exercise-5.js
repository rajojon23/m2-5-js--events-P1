// Exercise 5
//
// 1. Write a function that accepts a month (as a string) as an argument and returns the number of days in that month.
// Use a switch statement to solve this exercise.

// - Ignore leap years
// - If the provided argument is not a known month, return 'error';

const getDaysInMonth = (month) => {
  // Insert missing solution please
  switch(month){
  	case "January":
  		return 31;
  		break;
  	case "February":
  		return 28;
  		break;
  	case "March":
  		return 31;
  		break;
  	case "April":
  		return 30;
  		break;
  	case "May":
  		return 31;
  		break;
  	case "June":
  		return 30;
  		break;
  	case "July":
  		return 31;
  		break;
  	case "August":
  		return 31;
  		break;
  	case "September":
  		return 30;
  		break;
  	case "October":
  		return 31;
  		break;
  	case "November":
  		return 30;
  		break;
  	case "December":
  		return 31;
  		break;
  	default:
  		return "error";
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = getDaysInMonth;
