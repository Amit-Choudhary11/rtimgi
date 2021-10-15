function preload() {
  image="chair.jpg"  
}

function setup(){
canvas= createCanvas(390,300);
canvas.position(550,370);
video= createCapture(VIDEO);
video.size(390,300);
video.hide();

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s-JyHUZs6/model.json",modelLoaded);
}

function modelLoaded() {
  console.log("model Loaded")  ;
}

function draw(){
image(image,0,0,390,300);
classifier.classify(video,gotResults);
}


function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);

    }
}