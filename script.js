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

movies: ["ironman","avengers","endgame","infinitywar","thor","spiderman", "blackpanther","doctorstrange","captainamerica","guardians"
],

people: [ "tonystark","ironman","peterparker","spiderman","thor","loki","thanos","hulk","wanda","doctorstrange"
],

countries: ["egypt","america","japan","china","canada","brazil","france","germany","italy","australia"
]
}

// get random word for starting the game
let allkeys = Object.keys(words);
let randomnum = math.floor(math.random() * allkeys.length);
let randomname = allkeys[randomnum];
let randomvalue = words[randomname];
let randomvaluenum = math.floor(math.random() * randomvalue.length);
let randomvaluevalue = randomvalue[randomvaluenum];
document.querySelector(".game-info .category span").innerHTML = randomname;
