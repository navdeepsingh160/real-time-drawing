noseX=0;
noseY=0;
difference=0;
leftwristx=0;
rightwristx=0;

function setup(){
    canvas  =createCanvas(550, 450);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose", gotPoses);

}



function modelLoaded(){
    console.log("poseNET is LOADED");

}


function gotPoses(results){
    if (results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+", noseY="+noseY);
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=leftwristx-rightwristx;
        console.log(difference);
    }
}


function draw(){
    background("blue");
    fill("red");
    stroke("black");
    square(noseX,noseY,difference);





    
}