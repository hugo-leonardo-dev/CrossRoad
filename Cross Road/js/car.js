let carsX = [600, 600, 600, 600, 600, 600];
let carsY = [50, 105, 155, 220, 270, 320];
let carsVelocity = [1.5, 2, 2.5, 3, 3.5, 4];
let widthCar = 40;
let heightCar = 25;

function drawCars(){

    for(let i = 0; i < carsImages.length; i++){
        image(carsImages[i], carsX[i], carsY[i], widthCar, heightCar);
    }
}

function moveCars(){
    for(let i = 0; i < carsImages.length; i++){
        carsX[i] -= carsVelocity[i];
    }
}

function loopCars(){
    for (let i = 0; i < carsImages.length ; i++) {
        if(verifyCarBorder(carsX[i])){
          carsX[i] = 600;
        }
      }  
}

function verifyCarBorder(carX){
    return carX < -50; 
}

