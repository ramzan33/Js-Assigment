const chkleapYear=()=>{
var year = document.getElementById(leapYear).text;
alert(year)
var LeapYear = year % 4;

if (LeapYear==0) {
    alert("This is Leap Year");
} else {
    alert("This is not leap year");
}
}
chkleapYear();