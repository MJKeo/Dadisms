var output = document.getElementById("result");
var button = document.getElementById("button");
var spacer = document.getElementById("variable");
var optional = document.getElementById("optional");

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    spacer.classList.remove("spacer");
    spacer.classList.add("phone-spacer");
    optional.classList.add("gone");
    output.classList.add("reduced-result-size");
}

var phrases = [
    "*someone dabs* \"Dib!\"",
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