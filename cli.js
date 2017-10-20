var inquirer = require("inquirer");
var Word =require("./word.js");

//the word that user will try to guess
var gameWord = new Word("apple");


//load the inquirer prompt questions
//while loop the prompt





//if game function end
//else question

//this function is suppose to be my base case for recursion
function checkWordGuess(wordForGame){
	//get the current display word that contains correct letter guesses
	//and underscores. Join the array together to create on string
	var userWordDisplayGuess = wordForGame.displayWord.join("");
	//if the display word is equal to the word that the user needs to guess
	if(userWordDisplayGuess === wordForGame.word){
		//print you when
		console.log("You win!")
		return true
	}else{
		console.log("Keep 'em guesses coming!")
		return false

	}

}

//var endGame = checkWordGuess(gameWord);

function question(){

inquirer.prompt([{
		type: "input",
		name: "modeSelect",
		message: "Guess a Letter! Guess the right word and you'll win a prize!!!",
	}]).then( function (response) {

		console.log(response.modeSelect);
		gameWord.newLetter(response.modeSelect);


		
		//console.log(checkWordGuess(gameWord));


	})

}//end of question functions

//question();



function askOrPerformFinalAction() {
question()

  if (checkWordGuess(gameWord)) {
    console.log("You are a winner! Dolla Dolla Bill Yall!!!");
    //return;
  }
  /*
  else{
  	 console.log(checkWordGuess(gameWord));
  	 question()
  }
*/
 

}


askOrPerformFinalAction()