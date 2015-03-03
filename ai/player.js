var Player = function(type) {
	this.type = (type >= 0 && type <=2) ? type : 0; //0 always stays, 1 always changes, 2 is random indecisive fuck
}

Player.prototype.guess = function() {
	this.currentGuess = Math.floor(Math.random() * 3);

	if (_debugLogs) {
		console.log("Players first guess:".blue, this.currentGuess);
	}
	return this.currentGuess; //array index to be used in door selection, 0-2
}

Player.prototype.changeMind = function() {
	var change = (this.type != 2) ? this.type : Math.floor(Math.random() * 2);
	
	if (_debugLogs) {
		console.log("Player changes their mind? ".blue, change);
	}
	return change;
}

Player.prototype.secondGuess = function(revealedGoat) {
	var guess;

	if (!this.changeMind()) {
		guess = this.currentGuess;
	} else {
		switch(revealedGoat) {
			//return one of the remaining doors
			case 0:
				guess = (this.currentGuess == 1) ? 2 : 1;
			break;
			case 1:
				guess = (this.currentGuess == 0) ? 2 : 0;
			break;
			case 2:
			    guess = (this.currentGuess == 1) ? 0 : 1;
			break;
		}
	}

	if (_debugLogs) {
		console.log("Players second guess:".blue, guess);
	}
	return guess;
}

exports.new = function(type) {
	return new Player(type);
}