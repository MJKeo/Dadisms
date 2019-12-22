var output = document.getElementById("result");
var button = document.getElementById("button");

var phrases = [
    "*someone dabs* \"Dib!",
    "\"Ghost busters, were'nt those the guys on Discovery Channel?\"",
    "\"Fing shwa\" (intended to be feng shui",
    "\"Kernel Tunnel Syndrome\"",
    "the quality of being impudent; impertinence",
    "\"No it snot\"",
    "Wiki: pliable twigs, typically of willow, plaited or woven to make items such as furniture and baskets",
    "A common workout tool, the cowbell",
    "christmas swag = \'swagger\'"
];


function generate() {
    var num = Math.floor(Math.random() * phrases.length);
    output.innerText = phrases[num];
    button.innerText = "Tell me another";
}