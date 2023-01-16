function Call_Loop() {
    var Digit = "";
    var A = 1;
    while (A < 20) {  
    // A while loop loops through a block of code for as long as a specified condition is true.
        Digit += "<br>" + A; // The <br> causes spacing between text.
        A++;  // ++ is increment
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let sentence = "Omalley Abel is coding.";
let slen = sentence.length;  // The number of characters in the sentence
document.getElementById("lstr").innerHTML = slen;

var vegetables = ["lettuce", "carrots", "tomatoes", "kohlrabi", "beans"];
var veggies = "";
var X;
function for_Loop() {  // used to repeat a section of code a specific number of times
    for (X = 0; X < vegetables.length; X++) {
        veggies += vegetables[X] + "<br>";
    }
    document.getElementById("veg_garden").innerHTML = veggies;
}

function array_Function() {  // an array is a collection of data arranged in rows and columns
    var babyYoda = [];
    babyYoda[0] = "looking cute";  // the [] tells the index or location of the photo
    babyYoda[1] = "looking cuter";
    babyYoda[2] = "looking pensive";
    babyYoda[3] = "looking adorable";
    babyYoda[4] = "looking like a toddler";
    babyYoda[5] = "looking sweet";
    document.getElementById("Array").innerHTML = "In this picture, Baby Yoda is " + babyYoda[2] + ".";
}

function constant_function() {  //const means it will not change. cannot be modified
    const dog = {type:"labradoodle", weight: "30 lbs", color: "black"};
    dog.color = "brown";
    dog.price = "$2200";
    const dog2 = {type:"goldendoodle", weight: "60 lbs", color: "red"};
    dog2.price = "$2500";
    document.getElementById("constant").innerHTML = "The cost of the " +
    dog.type + " was " + dog.price + " and the cost of the " + dog2.type + " was " + dog2.price + " . ";
}

function varlet_function() {
    var A = 100;
    document.getElementById("varlet1").innerHTML = A;
    {
        let A = 200;  // The let keyword declares variables that have a block scope (within the curly brackets).
        document.getElementById("varlet2").innerHTML = A;
    }
    document.getElementById("varlet3").innerHTML = A;
}

function pie_function() {
    return Math.PI;  // The return statement stops the function and returns a value
}
document.getElementById("Pie").innerHTML = pie_function();

let dogs = {  // creating an object with properties and a method
    breed: "labradoodle ",
    size: "medium, ",
    color: "black, ",
    weight: "30 lbs ",
    description: function() {  // The method
        return "The dog is a " + this.size + this.color + this.weight + this.breed;
    }
};
document.getElementById("dogType").innerHTML = dogs.description();

let looptext = "";
for (let i = 10; i<20; i++) {
    if (i === 16) {break;}  // The break statement ends the loop at a specific point
    looptext += "The number is " + i + "<br>";
}
document.getElementById("loopbreak").innerHTML = looptext;