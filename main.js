var nose_x=0;
var nose_y=0;
function preload(){
imgt=loadImage("https://postimg.cc/bsV5tR30")}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    pose=ml5.poseNet(video , uploaded);
    pose.on('pose',gotpose);
}
function uploaded(){
console.log("posenet initialized");
}
 function gotpose(results){
     if(results.length >0){
         console.log(results);
         nose_x=results[0].pose.nose.x-20;
         nose_y=results[0].pose.nose.y-20;
     }
 }
function draw(){
image(video,0,0,300,300);
image(imgt,nose_x,nose_y,50,50);
}
function takesnap(){
    save("the mighty ahoms who defeted mughals 17 times.jpeg")
}