//Input a year greater than 0
//Output true if leap year, false if not
// leap year =  / 4 && NOT / 100   OR  / 100 && 400
function isLeapYear(year) {

if ( year < 1752){
	if (year % 4 === 0){
		return true;
	}
	else{
		return false;
	}
}else {



  if (year % 4 === 0 && year % 100 !== 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
}

isLeapYear(2016);