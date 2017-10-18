/*
  * **Word**: Used to create an object representing the current 
  word the user is attempting to guess. This should contain word specific logic and data.
  */


//create an object that holds the word that the user needs to guess
// if index of letter doesn't exists yell at the user and doc their points down
//else loop through the word and see if it equals and replace the underscore


//require the letter
var letter =require("./letter.js");

var Word = function(){

	//multiple words that could be used for the game
	//this.wordArr = ["apple","carrot","cookie","banana"];

	//what i want the user to guess
	this.guessWord = "apple";
	this.tempWord = [];
	this.numGuess = 10;


	//randomly pick at word
	/*
	 this.pickWord = function(){

	 	console.log(wordArr.length);

	 }
	 */
	//the word the user would guess

	//check if the letter is guessed
	this.newLetter = function(letter, guessedCorrectly) {
		for(var i = 0; i<this.guessWord; i++){
			var newletter = new HangmanLetter(letter, guessedCorrectly);
    		console.log(newLetter.letter);

		}

    

  };

	
}

var myWord = new Word();
myWord.pickWord();


module.exports = Word;