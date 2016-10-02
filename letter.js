// should control whether or not a letter appears as a "_" or as itself on-screen

var game = require('./game.js');

var nflWord = game.game.getRandomTeam();

var nflAnswer = nflWord.split('');

var numBlanks = nflAnswer.length;

var blanksAndSuccesses = [];

var wrongGuesses = [];

for (var i=0; i < numBlanks; i++){
	blanksAndSuccesses.push("_");
}