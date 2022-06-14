nose_x=0;
nose_y=0;
left_eye_x=0;
right_eye_y=0;
left_eye_y=0;
right_eye_x=0;
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/xqr4zHQF/nose-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function draw(){
    image(video,0,0,300,300);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(nose_x,nose_y,20);
    fill(255,255,255);
    stroke(255,255,255);
    ellipse(left_eye_x,left_eye_y,25,40);
    ellipse(right_eye_x,right_eye_y,25,40);
    fill(0,0,0);
    stroke(0,0,0);
    circle(left_eye_x,left_eye_y,10);
    circle(right_eye_x,right_eye_y,10);
    image(clown_nose,nose_x,nose_y,40,40);
    
}
function take_snapshot(){
    save('myfilter_image.png');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        nose_x=results[0].pose.nose.x-18;
        nose_y=results[0].pose.nose.y-15;
        left_eye_x=results[0].pose.leftEye.x;
        left_eye_y=results[0].pose.leftEye.y;
        right_eye_x=results[0].pose.rightEye.x;
        right_eye_y=results[0].pose.rightEye.y;
        console.log("nose_x="+nose_x);
        console.log("nose_y="+nose_y);
        console.log("left_eye_x"+left_eye_x);
        console.log("left_eye_y"+left_eye_y)
        console.log("right_eye_x"+right_eye_x);
        console.log("right_eye_y"+right_eye_y);
    }
}