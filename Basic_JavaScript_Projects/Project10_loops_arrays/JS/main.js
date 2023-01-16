function Call_Loop() {
    var Digit = "";
    var A = 1;
    while (A < 20) {
        Digit += "<br>" + A;
        A++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

let sentence = "Omalley Abel is coding.";
let slen = sentence.length;
document.getElementById("lstr").innerHTML = slen;

var vegetables = ["lettuce", "carrots", "tomatoes", "kohlrabi", "beans"];
var veggies = "";
var X;
function for_Loop() {
    for (X = 0; X < vegetables.length; X++) {
        veggies += vegetables[X] + "<br>";
    }
    document.getElementById("veg_garden").innerHTML = veggies;
}

function array_Function() {
    var babyYoda = [];
    babyYoda[0] = "looking cute";
    babyYoda[1] = "looking cuter";
    babyYoda[2] = "looking pensive";
    babyYoda[3] = "looking adorable";
    babyYoda[4] = "looking like a toddler";
    babyYoda[5] = "looking sweet";
    document.getElementById("Array").innerHTML = "In this picture, Baby Yoda is " + babyYoda[2] + ".";
}

function constant_function() {
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
        let A = 200;
        document.getElementById("varlet2").innerHTML = A;
    }
    document.getElementById("varlet3").innerHTML = A;
}

function pie_function() {
    return Math.PI;
}
document.getElementById("Pie").innerHMTL = pie_function();