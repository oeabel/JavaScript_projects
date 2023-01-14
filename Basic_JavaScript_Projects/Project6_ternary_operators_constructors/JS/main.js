function vote_Function() {  //Ternary operator: assigns a variable based on a condition
    var Age, can_Vote;
    Age = document.getElementById("Age").value;
    can_Vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = can_Vote + " to vote.";
}

function Grade(Biology, Math, English, PE) { //Object constructor
    this.Grade_Biology = Biology;  //This indicates the object that is the owner
    this.Grade_Math = Math;
    this.Grade_English = English;
    this.Grade_PE = PE;
}
var Sam = new Grade("A", "A", "B", "B");  //Creates a new keyword
var John = new Grade("A", "C", "A", "A");  //var is a keyword
var Grace = new Grade("B", "B", "B", "C");
function myFunction() {
    document.getElementById("New_and_This").innerHTML =
    "Grace got a " + Grace.Grade_Biology + " in Biology, a " + Grace.Grade_Math +
    " in Math, a " + Grace.Grade_English + " in English, and a " +
    Grace.Grade_PE + " in PE.";
}

    // var X = 9;.... X is an identifier, 9 is a literal (represents a value)      

function Nested_Function(firstName, lastName) {
    function getFullName() {
        return firstName + " " + lastName;
    }
    document.getElementById("getFullName").innerHTML = "Hello " + getFullName;
}

