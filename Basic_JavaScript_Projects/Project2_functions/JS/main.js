function myFunction() {
    var sentence = "Omalley is learning";
    sentence += " so much coding!"; //The += concatenates the two pieces of the sentence
    document.getElementById("Concatenate").innerHTML = sentence; //innerHTML sets the html within the element
}

function My_First_Function() {
    var str = "This is the button text!"; //Text that displays when the button is pushed
    document.getElementById("Button_Text").innerHTML = str;
}