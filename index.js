for(var i=0; i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     //  var buttonData = this.innerHTML;
       makeSound(this.innerHTML);
       animation(this.innerHTML);
       }
    );    
}

document.addEventListener("keypress",function(event){
   // var keyPressed = event.key;
    makeSound(event.key);
    animation(event.key);
   // console.log(keyPressed);   
});

function makeSound(key){
    switch(key){
        case 'w':
        case 'W':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        
        case 'a':
        case 'A':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
        case 'S':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        
        case 'd':
        case 'D':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
        case 'J':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
        case 'K':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
 
        case 'l':
        case 'L':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        default:
            alert("Please Choose from the speicfied Keys! Or click on the buttons!");
            
    }
}

function animation(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },200);
}
//var audio = new Audio("sounds/crash.mp3");
//audio.play();

/*var audio;
if(this.innerHTML=="a"){
    audio = new Audio("sounds/crash.mp3");
    audio.play();
}
else if(this.innerHTML=="w"){
    audio = new Audio("sounds/snare.mp3");
    audio.play();
}*/