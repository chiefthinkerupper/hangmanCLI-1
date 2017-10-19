var inquirer = require("inquirer");
var Word =require("./word.js");

//the word that user will try to guess
var gameWord = new Word("apple");

//load the inquirer prompt questions
function question(){
	//while loop the prompt
	var count =9;
	while()
inquirer.prompt([{
		type: "input",
		name: "modeSelect",
		message: "Guess a Letter! Guess the right word and you'll win a prize!!!",
	}]).then( function (response) {

		console.log(response.modeSelect);
		gameWord.newLetter(response.modeSelect);

	})

}//end of question functions

question();

/*

function post(){
	inquirer.prompt([
	{
		type: "input",
		name: "name",
		message: "What is the object's name you want to post?"
		
	},

	{
		type: "input",
		name: "category",
		message: "What is the object's category you want to post?"
	},

	{
		type: "input",
		name: "startBid",
		message: "What is the object's starting price you want to post?"
	}

	]).then(function(postResponse){

			createBid(postResponse.name,postResponse.category,postResponse.startBid);
			question();

	})

//end of post function
}

function bid(){
var array = readBids()

//end of bid function
}

*/