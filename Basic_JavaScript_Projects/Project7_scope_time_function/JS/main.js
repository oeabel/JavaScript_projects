var A = 100; //This is a global variable because it appears outside of a function
//Global variables are available to multiple functions
function subtract_Numbers_1() {  
    document.getElementById("globalvar1").innerHTML = 20 - A;
}
function subtract_Numbers_2() {
    document.getElementById("globalvar2").innerHTML = 200 - A;
}


function add_Numbers () {
    var B = 20;  //This is a local variable
    //a local variable appears inside a function and can only be used by that function
    document.getElementById("localvar1").innerHTML = 20 - B;  
}

function get_Date() {  
    if (new Date().getHours() <12) {  //checks the condition
        document.getElementById("hello").innerHTML = "Good morning!";  //runs if condition is true
    } else {  
        document.getElementById("hello").innerHTML = "Hello!";  //happens if the condition is false
    }
}

function watch_Movie() {  //runs if else condition
    Age = document.getElementById("Age").value;
    if (Age >= 13) {
        watchmov = "You are old enough to watch the movie!"
    } else {
        watchmov = "You are too young to watch the movie."
    }
    document.getElementById("Watch").innerHTML = watchmov;
}