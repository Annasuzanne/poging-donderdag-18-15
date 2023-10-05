var Hamburgermenu = document.getElementsByClassName("hamburgermenu");

function OpenMenu() {
    Hamburgermenu[0].style.display = "block";
}

function CloseMenu() {
    Hamburgermenu[0].style.display = "none";
}

// Bronnen: Marina, chatGPT, code van internetstandaarden 


var winkelwagen1 = document.getElementsByClassName("winkelwagen1");
var winkelwagen2 = document.getElementsByClassName("winkelwagen2");
var isWinkelwagen1Zichtbaar = true;

function toggleWinkelwagen() {
    if (isWinkelwagen1Zichtbaar) {
        winkelwagen1[0].style.display = "block";
        winkelwagen2[0].style.display = "none";
        isWinkelwagen1Zichtbaar = false;
    } else {
        winkelwagen1[0].style.display = "none";
        winkelwagen2[0].style.display = "block";
        isWinkelwagen1Zichtbaar = true;
    }
} 

// bron: Kenza en chatGPT



var kerstKnoppen = document.getElementsByClassName("kerst");
var kleurenGewijzigd = false; 

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
    }
  });
}

// bron: https://www.w3schools.com/css/css3_variables_javascript.asp#:~:text=CSS%20variables%20have%20access%20to,can%20change%20them%20with%20JavaScript
// maar vooral Kenza