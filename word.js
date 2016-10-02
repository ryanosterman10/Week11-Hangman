// should contain all of the methods which will check the letters guessed versus the random word selected

exports.checkInput = function(letter){
	var letterInWord = false;

	for(var i = 0; i < numBlanks; i++){
		if(wordInPlay[i] == letter){
			letterInWord = true;
		}
	}

	if(letterInWord){
		for (var i = 0; i < numBlanks; i++){
			if(wordInPlay[i] == letter){
				blanksAndSuccesses[i] = letter;
			}
		}
	}

	else{
		wrongGuesses.push(letter);
		numGuesses--;
	}

} // end of checkInput