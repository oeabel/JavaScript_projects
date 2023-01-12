function add(x, y)   {   //adds two numbers
      let addmathy = x + y;
      alert(addmathy);
}  

function sub(x, y) {  //subtracts two numbers
    var submathy = document.getElementById("submathy");
    submathy.innerHTML = 10 - 5;
}

function mult(x, y) {  //multiplies two numbers
    var multmathy = document.getElementById("multmathy");
    multmathy.innerHTML = 10 * 5;
}

function div(x, y) {  //divides two numbers
    var divmathy = document.getElementById("divmathy");
    divmathy.innerHTML = 10 / 5;
}

function msad() {  //multiplies, subtracts, adds, and divides four numbers
    var msadmathy = document.getElementById("msadmathy");
    msadmathy.innerHTML = 10 * 5 - 2 + 1 / 1;
}

function modulus_Operator() { //calls the remainder of the operation
    var simple_Math = 25 % 6;
    document.getElementById("simple_Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

function negation_Operator() {  //gives the negative of the variable
    var x = 10;
    document.getElementById("x").innerHTML = -x;
}

function increment() {  //increases the variable by 1
    var y = 10;
    y++;
    document.getElementById("y").innerHTML = y;
}

function decrement() {  //decreases the variable by 1
    var z = 10;
    z--;
    document.getElementById("z").innerHTML = z;
}

function random() {  //gives a random number
    var ran = Math.random() * 100;
    window.alert(ran);
}