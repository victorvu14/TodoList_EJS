// passing data between files
//console.log(module);
module.exports.getDate = getDate;
function getDate(){
var today = new Date();
var currentDay = today.getDay();
// switch (currentDay) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;

//     default:
//         console.log("Error");
// }
var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
}
return today.toLocaleDateString("en-US", options);
}

// call a second function on the export module. Summarize the function
module.exports.getDay = function (){
var today = new Date();
var currentDay = today.getDay();
var options = {
    weekday: "long",
}
return today.toLocaleDateString("en-US", options);
}