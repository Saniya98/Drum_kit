// document.querySelector("button").addEventListener("click", function(){
//     alert("you clicked me");
// })
// Select all buttons and add event listener to each//one way

// document.querySelectorAll("button").forEach(function(button) {
//     button.addEventListener("click", function() {
//         alert("You clicked me");
//     });
// });
//another way to select class name and add event listerner to it

//detecting button press
var buttons = document.getElementsByClassName("drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
//detecting keyboard press

document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttonAnimation(event.key);
});

function makesound(key) {
  switch (key) {
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-1.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

      case "a":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(buttonInnerHTML);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 200);
}
