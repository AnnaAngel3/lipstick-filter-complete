nosex=0;
nosey=0;

function preload() {
img=loadImage('https://i.postimg.cc/3x3QzSGq/m.png')
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();

    video=createCapture(VIDEO)
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x-10;
        nosey=results[0].pose.nose.y-10;
        console.log("nose x="+nosex);
        console.log("nose y="+nosey); 
    }
}

function modelLoaded(){
    console.log("ModelIsLoaded!")
}

function draw(){
     image(video,0,0,300,300);
     //fill("red")
     //stroke("red")
     image(img,nosex,nosey,30,30);
}

function take_snapshot(){
    save('myFilterImage.png');
    
}