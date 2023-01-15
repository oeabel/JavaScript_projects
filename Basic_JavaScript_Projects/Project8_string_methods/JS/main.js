function Slicing() {  // .slice is a way of pulling out certain characters from a string
    var Sentence = "Sometimes, Omalley's head is swimming with new code to figure out.";
    var Section = Sentence.slice(11, 18);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper() {
    text = document.getElementById("Sentence").value;  // Uses the input from the user
    let answer = text.toUpperCase();  // This is the method that makes all letters uppercase
    document.getElementById("makingUpper").innerHTML = answer;
}

function Looking() {  
    text = "Omalley is coding. It is very challenging but she is happy."
    let position = text.search("happy");  // .search method returns the position of the first match
    document.getElementById("lookFor").innerHTML = position;
}

function string_Method() {  // .toString changes a number to a string
    var X = 562;
    document.getElementById("num_to_str").innerHTML = X.toString();
}

function precisionMethod() { // .toPrecision formats a number to a specific length
    var X = 153.653333;
    document.getElementById("precision").innerHTML = X.toPrecision(3);
}

function fixedNumber() {  // .toFixed converts to a string and rounds a number to a specific number of decimals
    let num = 12.32;
    let n = num.toFixed(1);
    document.getElementById("fix").innerHTML = n;
}

function primValue() {  // valueOf returns the primitive value of a string
    let text = "Omalley doesn't understand the point of this method.";
    let result = text.valueOf();
    document.getElementById("primitive").innerHTML = result;
}

function full_Sentence() {
    var sen1 = "There is ";
    var sen2 = "so much ";
    var sen3 = "to learn right now ";
    var sen4 = "that my head is swimming...";
    var sentence = sen1.concat(sen2, sen3, sen4);
    document.getElementById("Concatenate").innerHTML = sentence;
}