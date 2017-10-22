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

	//holds every letter that is guessed
	this.guessLetters =[];

	//makes displayWord array entirely underscores
	this.holderArray = function(){
		for(var i =0; i<this.wordArray.length;i++){
			this.displayWord.push("_");
		}
	}

	//create a function that checks if the user guessed the right letter
	this.newLetter = function(userLetter) {
		
		//every letter the user guesses push the letter
		this.guessLetters.push(userLetter);

		//instance of the HangmanLetter
		//checks to see if the user's guess is right
		var letter; 

		for(var i = 0; i<this.wordArray.length; i++){

			//console.log(this.displayWord);

			//if a letter already exsist then just display the word
			if(this.displayWord[i] !="_"){
				console.log(this.displayWord);
			}
			else if(this.wordArray[i] === userLetter && this.displayWord[i] === "_"){
			 letter = new HangmanLetter(userLetter, true);
			 this.displayWord[i]= letter.display();
			 //this.guessLetters = this.displayWord.join("");

			 //this.displayWord.push(letter.display());
			}
			else{
				letter = new HangmanLetter(userLetter,false);
				this.displayWord[i]= letter.display();

				//this.displayWord.push(letter.display());
			}

		}  


		//this.display = this.wordArray.join("")

		//console.log(this.displayWord);
		return this.displayWord;
		//this.guessLetters.push(this.displayWord);
		//console.log(guessLetters.length)

  };
	
}

var gameWord = new Word("apple");
gameWord.holderArray();
console.log(gameWord.displayWord);
gameWord.newLetter("a");
console.log(gameWord.displayWord);
gameWord.newLetter("p");
console.log(gameWord.displayWord);
gameWord.newLetter("l");
console.log(gameWord.displayWord);
gameWord.newLetter("e");
console.log(gameWord.displayWord);

/*
var newGuess = gameWord.newLetter("a");
gameWord.displayWord = newGuess;
console.log(newGuess);
newGuess = gameWord.newLetter("p");
console.log(gameWord.displayWord);
*/

module.exports = Word;