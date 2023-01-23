let imageBackgroud;

let x_ball = 300;
let y_ball = 200;
let diam_ball = 20;
let rad_ball = diam_ball/2;
let velocXball = 6;
let velocYball = 6;

let width_racket = 10;
let height_racket = 100;

let x_player = 15;
let y_player = 150;
let pt_player = 0;

let x_pc = 600 - width_racket - 15;
let y_pc = 150;
let velocPc = 0;
let pt_pc = 0;
let difficulty = 0;
let hit = false;

function preload(){
}

function setup(){
    createCanvas(600, 400);
    imageBackgroud = loadImage("images/background.jpg");
}

function draw(){
    
    background (imageBackgroud);
    
    fill(127,244,91,255);
    drawRacket(x_player, y_player);
    fill(96,0,53,255);
    drawRacket(x_pc, y_pc);
    fill(255);
    drawBall();
    points();

    moveBall();
    movePc();
    movePlayer();

    verifyBallColisionBorder();
    verifyBallColisionRacket(x_player, y_player);
    verifyBallColisionRacket(x_pc, y_pc);
}


function drawBall(){
    circle(x_ball, y_ball, diam_ball);
}

function drawRacket(x, y){
    rect(x, y, width_racket, height_racket);
}

function moveBall(){
    y_ball += velocYball;
    x_ball += velocXball;
}

function verifyBallColisionBorder(){
    if(x_ball > width - rad_ball 
    || x_ball < 0 + rad_ball){
        velocXball *= -1;
    }

    if(y_ball > height - rad_ball
        || y_ball < 0 + rad_ball){
        velocYball *= -1;
    }
}

function verifyBallColisionRacket(x, y){
    hit = collideRectCircle(x, y, width_racket, height_racket, x_ball, y_ball, rad_ball);
    if(hit){
        velocXball *= -1;
    }
}

function movePlayer(){
    if(keyIsDown(DOWN_ARROW)){
        velocYplayer = y_player += 5;
    }
    if(keyIsDown(UP_ARROW)){
        y_player -= 5;
    }
}

function calculateDifficulty(){
    if(pt_pc >= pt_player){
        difficulty += 1;
        if(difficulty >= 39)
            difficulty = 40
        else{
            difficulty -= 1
            if(difficulty <= 35)
                difficulty = 35;
        }
    }
}

function movePc(){
    velocPc = y_ball - y_pc - height_racket/2 - 50;
    y_pc += velocPc;
    calculateDifficulty();
}

function points(){
    textAlign(CENTER);
    textSize(16);

    fill(244, 164, 96);
    rect(150, 10, 40, 20);
  
    fill(255);
    text(pt_player, 170, 26);
   
    fill(244, 164, 96);
    rect(450, 10, 40, 20);
    
    fill(255);
    text(pt_pc, 470, 26);


    if(x_ball > width - rad_ball){
        pt_player += 1;
        x_ball = 300;
    }

    if(x_ball < 10){
        pt_pc += 1;
        x_ball = 300;
    }
}

/* function verifyBallColisionPlayer(){
    if(x_ball - rad_ball < x_player + width_player && 
       y_ball - rad_ball < y_player + height_player &&
       y_ball + rad_ball > y_player){
        velocXball *= -1;
    }
} */

