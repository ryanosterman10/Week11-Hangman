var inquirer = require('inquirer');

var Game = {

	nflTeams: [
		'bears',
		'bengals',
		'bills',
		'broncos',
		'browns',
		'bucaneers',
		'cardinals',
		'chargers',
		'cheifs',
		'colts',
		'cowboys',
		'dolphins',
		'eagles',
		'falcons',
		'giants',
		'jaguars',
		'jets',
		'lions',
		'niners',
		'packers',
		'panthers',
		'patriots',
		'raiders',
		'rams',
		'ravens',
		'redskins',
		'saints',
		'seahawks',
		'steelers',
		'texans',
		'titans',
		'vikings'
	],

	instructions: '---------- NFL HANGMAN ---------- \nType a letter and see if you can guess the NFL team name!(not the city)',
	chosenWord: '',
	shownWord: '',
	playerInput: '',

	displayInstructions: function(){
		console.log(this.instructions);
	}






}; //end of Game object


Game.displayInstructions();