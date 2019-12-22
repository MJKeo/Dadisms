var output = document.getElementById("result");
var button = document.getElementById("button");

var phrases = [
    "one",
    "two"
];


function generate() {
    var num = Math.floor(Math.random() * phrases.length);
    output.innerText = phrases[num];
    button.innerText = "Tell me another";
}