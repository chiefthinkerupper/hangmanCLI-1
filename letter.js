//constructor for letters in hangman game

function HangmanLetter(letter, guessedCorrectly){
	this.letter = letter;
	this.guessedCorrectly = guessedCorretly;
	this.display = function(){
		if(this.guessedCorrectly){
			return this.letter
		}else{
			return '_'
		}
	}
}

module.exports = HangmanLetter;