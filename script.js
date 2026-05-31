// letters logic
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);
let lettersContainer = document.querySelector(".letters");
lettersArray.forEach(letter => {
    let span = document.createElement("span");
    let theLetter = document.createTextNode(letter);
    span.appendChild(theLetter);
    span.className = "box";
    lettersContainer.appendChild(span);
});

// words of the game
const words = {
    programming: [ "javascript","python", "react", "html", "css", "github", "coding","frontend","backend","nodejs"
],

MarvelMovies: ["ironman","avengers","endgame","infinitywar","thor","spiderman", "blackpanther","doctorstrange","captainamerica","guardians"
],

MarvelCharacters: [ "tonystark","ironman","peterparker","spiderman","thor","loki","thanos","hulk","wanda","doctorstrange"
],

countries: ["egypt","america","japan","china","canada","brazil","france","germany","italy","australia"
]
}

// random word for starting the game
let allkeys = Object.keys(words);
let randomnum = Math.floor(Math.random() * allkeys.length);
let randomname = allkeys[randomnum];
let randomvalue = words[randomname];
let randomvaluenum = Math.floor(Math.random() * randomvalue.length);
let randomvaluevalue = randomvalue[randomvaluenum];
console.log("Word:", randomvaluevalue);
console.log("Length:", randomvaluevalue.length);
document.querySelector(".game-info .category span").innerHTML = randomname;


let lettersguesscont = document.querySelector(".letters-guess");
let lettersandspace = Array.from(randomvaluevalue);
lettersandspace.forEach(letter => {
    let emptyspan = document.createElement   ("span");
    if (letter === ' ') {
        emptyspan.className = "with-space";
    }
    lettersguesscont.appendChild(emptyspan);
})

let guessspans = document.querySelectorAll(".letters-guess span");
let wrongattempts = 0;
let thedraw = document.querySelector(".hangman-draw");
document.addEventListener("click", (e) => {
    let status = false;
    if (e.target.className === 'box') {
        e.target.classList.add("clicked");
        let clickedletter = e.target.innerHTML.toLowerCase();
        let chosenword = Array.from(randomvaluevalue);
        chosenword.forEach((wordletter, wordindex) => {
            if (clickedletter === wordletter) {
                status = true;
                guessspans.forEach((span, spanindex) => {
                    if (wordindex === spanindex) {
                        span.innerHTML = wordletter;
                    }
                });

            }
        });
        if (status !== true) {
            wrongattempts++;
            thedraw.classList.add(`wrong-${wrongattempts}`);
            document.getElementById("fail").play();
            if (wrongattempts === 8) {
                // Game over logic
                endgame();
                lettersContainer.classList.add("finished");
            }
        } else {
            document.getElementById("success").play();
            let allSpansFilled = true;
            guessspans.forEach(span => {
                if (span.innerHTML === "" && !span.classList.contains("with-space")) {
                    allSpansFilled = false; 
                }
            });
            if (allSpansFilled) {
                wingame(); 
                lettersContainer.classList.add("finished"); 
            }
        }
    }
});

// end game function
function endgame() {
    // popup div
    let div = document.createElement("div");
    //text
    let divtext = document.createTextNode(`Game Over, The word is ${randomvaluevalue}`);
   //appent text to the div
   div.appendChild(divtext);
   // add class to the div
   div.className = "popup lose";
   // append the div to the body
   document.body.appendChild(div);
}
// win game function
function wingame() {
    // popup div
    let div = document.createElement("div");
    // text
    let divtext = document.createTextNode(`Congratulations, You Win! You made ${wrongattempts} mistake(s).`);
    // append text to the div
    div.appendChild(divtext);
    // add class to the div
    div.className = "popup win";
    // append the div to the body
    document.body.appendChild(div);
}