function Music_Function() {
    var Music_Output;
    var Music = document.getElementById("Music_Input").value;
    var Music_String1 = "I love ";
    var Music_String2 = "!";
    switch(Music) {  //switch stmt performs different actions based on the conditions presented
        case "Rock":
            Music_Output = Music_String1 + "Rock" + Music_String2;
            break;
        case "Pop":
            Music_Output = Music_String1 + "Pop" + Music_String2;
            break;
        case "Latin Music":
            Music_Output = Music_String1 + "Latin Music" + Music_String2;
            break;
        case "Classical":
            Music_Output = Music_String1 + "Classical" + Music_String2;
            break;
        case "Classic Rock":
            Music_Output = Music_String1 + "Classic Rock" + Music_String2;
            break;
        case "Disco":
            Music_Output = Music_String1 + "Disco" + Music_String2;
            break;
        default:  // runs if there is no case match
            Music_Output = "Please enter a music type exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Music_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"  
    // Because we set it to index value of 0, it will be displayed in the first element with the class
}

// The following draws a circle graphic within the Canvas element
var c = document.getElementById("practiceCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2*Math.PI);
ctx.stroke();

// The following makes a gradient in the Canvas element
var c = document.getElementById("practiceCanvas2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 200);