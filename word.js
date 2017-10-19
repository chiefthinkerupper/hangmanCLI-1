/*
  * **Word**: Used to create an object representing the current 
  word the user is attempting to guess. This should contain word specific logic and data.
  */


//create an object that holds the word that the user needs to guess
// if index of letter doesn't exists yell at the user and doc their points down
//else loop through the word and see if it equals and replace the underscore


//require the letter
var HangmanLetter =require("./letter.js");

//create the word constructor
var Word = function(word){
	//the word the user would guess
	this.word = word;

	//array of the word that is being guessed
	this.wordArray = this.word.split("");

	//an array the holds all the hangman correct letters and underscore for
	//letters not yet guessed
	this.displayWord = [];

	//letters that guessed
	this.guessLetters = [];

	//create a function that checks if the user guessed the right letter
	this.newLetter = function(userLetter) {
		//for every letter that user guesses 
		this.guessLetters.push(userLetter);

		//instance of the HangmanLetter
		//the letter that the user guesses
		var letter; 
		for(var i = 0; i<this.wordArray.length; i++){
			if(this.wordArray[i] === userLetter){
			 letter = new HangmanLetter(userLetter, true);
			 this.displayWord.push(letter.display());
			}
			else{
				letter = new HangmanLetter(userLetter,false);
				this.displayWord.push(letter.display());
			}
			
    		

		}   
		console.log(this.displayWord);

  };
	
}

//var gameWord = new Word("apple");

module.exports = Word;