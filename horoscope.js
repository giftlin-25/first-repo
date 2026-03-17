let month = "May";

let randomNumber = Math.floor(Math.random() * 3);

if (month === "January") {
    console.log("♑ Capricorn");

} else if (month === "February") {
    console.log("♒ Aquarius");

} else if (month === "March") {
    console.log("♓ Pisces");

} else if (month === "April") {
    console.log("♈ Aries");

} else if (month === "May") {
    console.log("♉ Taurus");

} else if (month === "June") {
    console.log("♊ Gemini");

} else if (month === "July") {
    console.log("♋ Cancer");

} else if (month === "August") {
    console.log("♌ Leo");

} else if (month === "September") {
    console.log("♍ Virgo");

} else if (month === "October") {
    console.log("♎ Libra");

} else if (month === "November") {
    console.log("♏ Scorpio");

} else if (month === "December") {
    console.log("♐ Sagittarius");
}

if (randomNumber === 0) {
    console.log("Today is a lucky day for you!");
} else if (randomNumber === 1) {
    console.log("A surprise opportunity is coming.");
} else {
    console.log("You will learn something new today.");
}