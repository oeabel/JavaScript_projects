function my_Function7() {  //Names the type of data
    document.getElementById("myHeadHurts").innerHTML = typeof 'Dog';
}

function my_Function() {  //returns NaN (not a number) because zero cannot divide zero
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() {  //answers the question "is this a number?"
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_Function2() {  //answers the question "is this a number?"
    document.getElementById("Test2").innerHTML = isNaN('007');
}

function my_Function3() {  //returns infinity because number is too big
    document.getElementById("Test3").innerHTML = (3E310);
}

function my_Function4() {  //returns negative infinity
    document.getElementById("Test4").innerHTML = (-3E310);
}

function my_Function5() {  //returns true or false
    document.getElementById("Test5").innerHTML = (100 > 3);
}
 
function my_Function6() {  //returns true or false
    document.getElementById("Test6").innerHTML = (100 < 3);
}

console.log(3+2); 
console.log(3<2);

document.write(5 == 5);  //true or false
document.write(5 == 3);  //true or false

X = 100;
Y = 100;
document.write(X === Y);  //asked to evaluate if true or false

X = 100;
Y = "Dog";
document.write(X === Y);  //asked to evaluate if true or false

X = 100;
Y = "100";
document.write(X === Y);  //asked to evaluate if true or false

X = 50;
Y= 25;
document.write(X === Y);  //asked to evaluate if true or false

document.write(10 > 9 && 9 > 8);  //boolean 'and'
document.write(10 > 9 && 9 > 10); 

document.write(10 > 9 || 9 > 10);  //boolean 'or'
document.write(10 < 9 || 9 > 10);

function my_Function8() {  //Not (true or false opposite)
    document.getElementById("Not").innerHTML = !(100 > 50);
}

function my_Function9() {
    document.getElementById("Not2").innerHTML = !(50 > 100);
}
