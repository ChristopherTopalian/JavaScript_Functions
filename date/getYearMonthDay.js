// getYearMonthDay.js

function getYearMonthDay()
{
    let dateTime = new Date();

    let year = dateTime.getFullYear();

    let month = dateTime.getMonth() + 1;

    let day = dateTime.getDate();

    let yearMonthDay = year + '/' + month + '/' + day;

    return yearMonthDay;
}

console.log(getYearMonthDay());

//----//

/*
2024/11/19
*/

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

