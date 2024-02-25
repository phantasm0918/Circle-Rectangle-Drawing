function setup(){
  C1 = createCanvas(900, 500)
}

x = 0
y = 0

drawCircle = ""
drawRectangle = ""

api = window.webkitSpeechRecognition
REC = new api()
 function start(){
    REC.start()
    document.getElementById("status").innerHTML = "We are listening, please speak."
 }

 REC.onresult = function(E){
    myspeech = E.results[0][0].transcript
    document.getElementById("status").innerHTML = "You said " + myspeech
    if(myspeech == "circle"){
        x = Math.floor(Math.random()* 900)
        y = Math.floor(Math.random()* 500)
        drawCircle = "fine"
        document.getElementById("status").innerHTML = "Drawing a circle"
    }
    if(myspeech == "rectangle"){ 
     x = Math.floor(Math.random()* 900)
     y = Math.floor(Math.random()* 500)
     drawRectangle = "fine"
     document.getElementById("status").innerHTML = "Drawing a rectangle"
    }
 }

 function draw(){
    if(drawCircle == "fine"){
        circle(x, y, 100)
        document.getElementById("status").innerHTML = "Drawing finished"
        drawCircle = ""
    }
    if(drawRectangle == "fine"){
        rect(x, y, 100, 80)
        document.getElementById("status").innerHTML = "Drawing finished"
        drawRectangle = ""
    }
 }