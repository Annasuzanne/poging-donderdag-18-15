// var Hamburgermenu = document.getElementsByClassName("hamburgermenu");

// function OpenMenu() {
//     Hamburgermenu[0].style.display = "block";
// }

// function CloseMenu() {
//     Hamburgermenu[0].style.display = "none";
// }
// Bronnen: Marina, chatGPT, code van internetstandaarden 



// Deze code heb ik vervangen voor de herkansing: ik heb de onclicks uit de HTML weggehaald.
var hamburgerImg = document.querySelector(".hamburgerImg");

var hamburgermenu = document.querySelector(".hamburgermenu");

var kruisjeImg = document.querySelector(".kruisjeImg");

hamburgerImg.onclick = openMenu;

function openMenu() {
  hamburgermenu.classList.add("anders");
}

kruisjeImg.onclick = closeMenu;

function closeMenu() {
  hamburgermenu.classList.remove("anders");
}




// Bij deze code heb ik de queryselector gebruikt in plaats van de getElementsByClassName en ik heb de onclicks uit de HTML weggehaald.
var winkelwagen1 = document.querySelector(".winkelwagen1");
var winkelwagen2 = document.querySelector(".winkelwagen2");
var shopButtons = document.querySelectorAll("section article button");

shopButtons.forEach(function(shop) {
    shop.addEventListener('click', toggleWinkelwagen);
});

var isWinkelwagen1Zichtbaar = true;

function toggleWinkelwagen() {
    if (isWinkelwagen1Zichtbaar) {
        winkelwagen1.style.display = "block";
        winkelwagen2.style.display = "none";
        isWinkelwagen1Zichtbaar = false;
    } else {
        winkelwagen1.style.display = "none";
        winkelwagen2.style.display = "block";
        isWinkelwagen1Zichtbaar = true;
    }
}
// bron: Kenza en chatGPT








var kerstKnoppen = document.querySelectorAll(".kerst");
var kleurenGewijzigd = false; 

var afbeeldingen = document.querySelectorAll("section:nth-of-type(3) img, section:nth-of-type(4) img");

var oudeimg = document.querySelector("section:nth-of-type(3) img");
var santaimg = ("imgages/santaclaus.png");

// bron: https://voorkeuren.tvgids.nl/consent?target=https%3A%2F%2Fwww.guidinc.nl%2Fnieuws%2Fseries%2Fthe-santa-clauses-disney-plus-kerstmis-kerstserie&aid=bdc&sid=guidinc.web&referrer=https%3A%2F%2Flens.google.com%2F

var imgterug = "bannerimages/plaatje1.png";

var oudeimg2 = document.querySelector("section:nth-of-type(4) img");
var imgterug2 = "bannerimages/plaatje2.png";

var oudeimg3 = document.querySelector("section:nth-of-type(6) img");
var imgterug3 = "bannerimages/plaatjesection6.png";

var oudeimg4 = document.querySelector("section:nth-of-type(7) img");
var imgterug4 = "bannerimages/plaatjesection7.png";

var oudeimg5 = document.querySelector("section:nth-of-type(9) img");
var imgterug5 = "bannerimages/plaatjesection9.png";

var oudeimg6 = document.querySelector("section:nth-of-type(10) img");
var imgterug6 = "bannerimages/plaatjesection10.png";

var oudeimg7 = document.querySelector("section:nth-of-type(11) img");
var imgterug7 = "bannerimages/plaatjesection11.png";

var oudeimg8 = document.querySelector("section:nth-of-type(12) img:nth-of-type(1)");
var imgterug8 = "bannerimages/plaatjesection12.png";

var oudeimg9 = document.querySelector("section:nth-of-type(12) img:nth-of-type(2)");
var imgterug9 = "bannerimages/plaatje2section12.png";


var audio = document.querySelector("audio");

function afspelen() {
  audio.play();
}

function stoppen() {
  audio.pause();
  audio.currentTime = 0;
  isGeluidAfspelend = false;
}

for (var i = 0; i < kerstKnoppen.length; i++) {
  kerstKnoppen[i].addEventListener("click", function() {

    if (kleurenGewijzigd) {
 
      document.documentElement.style.setProperty("--color-text", "#111");
      document.documentElement.style.setProperty("--color-body", "#eee");
      document.documentElement.style.setProperty("--color-sections", "white");
      document.documentElement.style.setProperty("--nav-background", "#111");
      document.documentElement.style.setProperty("--special-heading", "rgb(166, 141, 115)");
      document.documentElement.style.setProperty("--color-nav", "black");
      document.documentElement.style.setProperty("--foto-tekst", "#eee");
      document.documentElement.style.setProperty("--linkjes", "#7912a4");
      document.documentElement.style.setProperty("--tekst-nav", "white");
      document.documentElement.style.setProperty("--tekst-background", "black");

      kleurenGewijzigd = false; 
      oudeimg.src = imgterug;
      oudeimg2.src = imgterug2;
      oudeimg3.src = imgterug3;
      oudeimg4.src = imgterug4;
      oudeimg5.src = imgterug5;
      oudeimg6.src = imgterug6;
      oudeimg7.src = imgterug7;
      oudeimg8.src = imgterug8;
      oudeimg9.src = imgterug9;
      stoppen();


    } else {
      document.documentElement.style.setProperty("--color-text", "white");
      document.documentElement.style.setProperty("--color-body", "#065603");
      document.documentElement.style.setProperty("--color-sections", "#ad0101");
      document.documentElement.style.setProperty("--nav-background", "#ad0101");
      document.documentElement.style.setProperty("--special-heading", "#ffffff");
      document.documentElement.style.setProperty("--color-nav", "#ad0101");
      document.documentElement.style.setProperty("--foto-tekst", "#eee");
      document.documentElement.style.setProperty("--linkjes", "#ffffff");
      document.documentElement.style.setProperty("--tekst-nav", "white");
      document.documentElement.style.setProperty("--tekst-background", "#ffffff");
      kleurenGewijzigd = true; 
      oudeimg.src = santaimg;
      oudeimg2.src = santaimg;
      oudeimg3.src = santaimg;
      oudeimg4.src = santaimg;
      oudeimg5.src = santaimg;
      oudeimg6.src = santaimg;
      oudeimg7.src = santaimg;
      oudeimg8.src = santaimg;
      oudeimg9.src = santaimg;
      afspelen();
    }
  });
}
// bron: https://www.w3schools.com/css/css3_variables_javascript.asp#:~:text=CSS%20variables%20have%20access%20to,can%20change%20them%20with%20JavaScript
// maar vooral Kenza



var audio2 = document.querySelector(".audio2");
// var audio2 = document.getElementsByClassName("audio2")[0];
var isPlaying = false;

document.addEventListener("keydown", function(event) {
    var key = event.key;

    if (key === "s" || key === "S") {
        if (isPlaying) {
            audio2.pause();
            isPlaying = false;
        } else {
            audio2.play();
            isPlaying = true;
        }
    }
});