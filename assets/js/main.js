/*
    Teste folgenden und die Befehle der nächsten Folie sowie die Befehle der w3schools Website:
*/
window.alert("Hallo Welt");
window.prompt("Bitte geben Sie Ihren Namen ein.");
window.prompt("Bitte geben Sie Ihren Namen ein", "Cancel");
window.confirm("Stimmen Sie meiner Meinung zu?");


let alter = prompt("Gib mir bitte dein Alter:");
console.log(alter);

let b = 5;
let a = b * 5 - 3;
alert(a);

let mann = "Robert Wadlow ist der größte Mann der Welt : ";
let grosse = "2,72m";
alert(mann + grosse);


/* 
    W3Schools Examples
*/
// Display an alert box:
alert("Hello! I am an alert box!!");

// Alert box with line-breaks:
alert("Hello\nHow are you?");

// Alert the hostname of the current URL:
alert(location.hostname);

// Display a prompt box which ask the user for her/his name, and output a message:
var person = prompt("Please enter your name", "Harry Potter");
if (person != null) {
    document.getElementById("demo").innerHTML =
        "Hello " + person + "! How are you today?";
}

// Using the switch statement together with prompt() to execute a block of code based on user input:
var text;
var favDrink = prompt("What's your favorite cocktail drink?");
switch (favDrink) {
    case "Martini":
        text = "Excellent choice! Martini is good for your soul.";
        break;
    case "Daiquiri":
        text = "Daiquiri is my favorite too!";
        break;
    case "Cosmopolitan":
        text = "Really? Are you sure the Cosmopolitan is your favorite?";
        break;
    default:
        text = "I have never heard of that one..";
        break;
}
if (favDrink != null) {
    document.getElementById("demo2").innerHTML = text;
}

// Display a confirmation box:
confirm("Press a button!");

// Display a confirmation box, and output what the user clicked:
var txt;
var r = confirm("Press a button!");
if (r == true) {
    txt = "You pressed OK!";
} else {
    txt = "You pressed Cancel!";
}
document.getElementById("demo3").innerHTML = txt;


// Confirmation box with line-breaks:
confirm("Press a button!\nEither OK or Cancel.");