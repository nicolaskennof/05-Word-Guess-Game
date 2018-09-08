var wordlist = [
        "DOUGH",
        "CHEESE",
        "TOMATO",
        "MOZZARELLA",
        "FLOUR",
        "PEPPERONI",
        "PINEAPPLE",
        "ARTICHOKE",
        "YEAST",
        "JALAPENO",
        "ONION",
        "BASIL",
        "BACON",
        "SAUSAGE",
        "HAM",
        "MUSHROOMS",
        "CHICKEN",
        "HABANERO",
        "CORN",
        "BEEF",
        "GARLIC"
    ];

    var hiddenWord = [];
    var keyhistory = [];
    var wins = 0;
        console.log(userkey);
        console.log(wins);
        console.log(remains);
    var winsCounter = document.getElementById("winsCounter");
        winsCounter.textContent = wins;
    var wordoc = document.getElementById("word");
    var remainsCounter = document.getElementById("remainsCounter");
    var userkeylist = document.getElementById("userkeylist");
    var remains = 13;

// in order that the computer chooses randomly a string in var ingredients
var word = wordlist[Math.floor(Math.random() * wordlist.length)];
console.log(word);

// in order to change every letter of the string by a "_"
    for ( var i = 0; i < word.length; i++) {
        hiddenWord[i] = " _ ";
   };
console.log(hiddenWord);

// in order to detect the key the user presses
document.onkeyup = function(event) {
    var userinput = event.key;
    var userkey = userinput.toUpperCase();
    console.log(userkey);

// if the key was already pressed, show alert
var boolkey = keyhistory.includes(userkey);
console.log(boolkey);

if ((boolkey) && (keyhistory.length > 0)) {
            alert("You already guessed " + userkey + " earlier!");
        }

// if not, check if the userkey is part of the word
    else {
        keyhistory += userkey + " ";
        console.log(keyhistory);
        userkeylist.textContent = keyhistory;
        var bool = word.includes(userkey);
        console.log(bool);
            if (bool === true || bool === false) {
                remains--;
                remainsCounter.textContent = remains;
                wordoc.textContent = hiddenWord;
                console.log(remains);
            };

            if (bool) {
                for (var j = 0; j < word.length; j++) {

// if yes, then replace "_" by userkey
                    if (word[j] === userkey) {
                        hiddenWord[j] = " " + userkey + " ";
                        wordoc.textContent = hiddenWord;
                        }


// if not, do nothing
                    else {
                        }
                    };
                };
        }

// if word incomplete AND remaining guesses = 0 then alert GAME OVER AND start new game
function image () {
    document.getElementById("img").src = "assets/images/" + word.toLowerCase() + ".jpg";
}
if ((hiddenWord.includes(" _ ")) && (remains === 0)) {
    console.log(hiddenWord.includes(" _ "));
    var audioLoses = new Audio("assets/sounds/lost.mp3");
    audioLoses.play();
    image();
    alert("Game Over!");
    alert ("Press any key to try again the Pizza Hangman!")
    reset();
}

// if word complete AND remaining guesses > -1 then WINS +1
    else if ((hiddenWord.includes(" _ ") === false) && (remains > -1)) {
    console.log(hiddenWord.includes(" _ "));
    var audioWins = new Audio("assets/sounds/wins.mp3");
    audioWins.play();
    image();
    alert("You win! The word your discovered is " + word);
    wins++;
    winsCounter.textContent = wins;
    alert ("Press any key to start a new Pizza Hangman game!")
    reset ();
}
};
// Reset
function reset () {
    hiddenWord = [];
    keyhistory = [];
    remains = 13;
    word = wordlist[Math.floor(Math.random() * wordlist.length)];
    console.log(word);
    for ( var i = 0; i < word.length; i++) {
        hiddenWord[i] = " _ ";
   };
};

    