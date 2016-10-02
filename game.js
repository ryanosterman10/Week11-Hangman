// will randomly select a word for the player

exports.game = {

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

	instructions: '\n---------- NFL HANGMAN ---------- \n\nType a letter and see if you can guess the NFL team name!(not the city)\n',

	wordInPlay: null,

	numGuesses: 5,

	displayInstructions: function(){
		console.log(this.instructions);
	},

	getRandomTeam: function(){
		var choice = (Math.floor(Math.random()*32) + 1);
		this.wordInPlay = this.nflTeams[choice];
		return this.wordInPlay;
		// console.log(this.wordInPlay + '\n');
	}

}; //end of game object

