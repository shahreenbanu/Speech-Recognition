var x = 0;
var y = 0;
draw_circle = "";
draw_rect = "";
draw_arc = "";

function setup() {
    canvas = createCanvas(1000, 800);

}
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("status").innerHTML="Please speak, the system is listening";
    recognition.start();

}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
document.getElementById("status").innerHTML="you said : " + content;
if(content == "Circle") { 
    x = Math.floor(Math.random()*1000);
    y = Math.floor(Math.random()*800);
    draw_circle = "set";
    document.getElementById("status").innerHTML="Started drawing a circle";
}
if(content == "rectangle") {
    x = Math.floor(Math.random()*1000);
    y = Math.floor(Math.random()*800);
    document.getElementById("status").innerHTML = "Started drawing rectangle";
    draw_rect = "set";
}
if(content == "Ark") {
    document.getElementById("status").innerHTML = "Started drawing arc";
    draw_arc = "set";
}
}
function draw() {
    if (draw_circle == "set") {
        circle(x, y, 100);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    if (draw_rect == "set") {
        rect(x, y,70,50);
       
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
    if (draw_arc == "set") {
        arc(50, 55, 50, 50, 0, HALF_PI);
        document.getElementById("status").innerHTML = "Arc is drawn.";
        draw_arc = "";
    }
    
   
}


