
//Create prompts for event and temp
var eventType = prompt("What type of event are you going to?");
var tempFahr = prompt("What is the temperature? (in degrees Fahrenheit)");

//Create empty string variables for clothing options
var tempClothes = '';
var eventClothes = '';

//if conditional to determine eventClothes value
if (eventType === "casual") {
    eventClothes = "something comfy";
} else if (eventType === "semi-formal") {
    eventClothes = "a polo";
} else {
    eventClothes = "a suit";
}

//if conditional to determine tempClothes value
if (tempFahr < 54) {
    tempClothes = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
    tempClothes = "a jacket";
} else {
    tempClothes = "no jacket";
}

//Result as string and logged to console
var result = "It is " + tempFahr + " degrees outside. You should wear " + tempClothes + " and " + eventClothes + " to your " + eventType + " event.";
console.log(result);