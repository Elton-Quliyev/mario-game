var mario = document.querySelector("#mario");
var speed = 20;
var mariopositionX = 0;  
var mariopositionY = 0;
var isScaled = false
var ses = document.querySelector(".marioses")

document.addEventListener("keydown", function (event) {
  console.log(event)
  if (event.key == "ArrowLeft") {
    mariopositionX -= speed;
    mario.classList.add("mario-animation")

    mario.style.transform = `translate(${mariopositionX}px , 0px)  scaleX(-1)`;
  }
  if (event.key == "ArrowRight") {
    mariopositionX += speed;
    mario.classList.add("mario-animation")

    mario.style.transform = `translate(${mariopositionX}px , 0px) `;
  }
  if (event.key == "ArrowUp") {
    mariopositionY -= speed;
    //mario.style.transition = "all 1s"
    mario.style.transform = `translate(${mariopositionX}px , -200px)`;
    mario.style.transition = "all 1s"
    setTimeout(function(){
     mario.style.transform = `translate(${mariopositionX}px , 0px) `;
    }, 500)
   }
 
  if(event.key == "b"){
    mario.style.transform = `translate(${mariopositionX}px , ${mariopositionY}px) scale(2)`;
    ses.play()
    setTimeout(function (){
    mario.style.transform = `translate(${mariopositionX}px , ${mariopositionY}px) scale(1)`;
    }, 1500)
  }
});


document.addEventListener("keyup" , function(event){
    mario.classList.remove("mario-animation")
    
})