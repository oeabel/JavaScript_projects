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
