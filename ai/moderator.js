var Moderator = function() {};


Moderator.prototype.revealGoat = function(doors, playerInput) {
	//return door index where a goat is, considering player input
	var goat;
	switch(playerInput) {
		case 0:
			if (doors[playerInput] == 'c') {
				goat = Math.floor(Math.random() * 2) + 1; //if player guessed a car, return door 1 or 2
			} else {
				goat = (doors[1] != 'c') ? 1 : 2; //if player guessed a goat, return other goat door
			}
		break;
		case 1:
			if (doors[playerInput] == 'c') {
				goat = (Math.floor(Math.random() * 2)) ? 0 : 2; //if player guessed a car, return door 0 or 2
			} else {
				goat = (doors[0] != 'c') ? 0 : 2; //if player guessed a goat, return other goat door
			}
		break;
		case 2:
			if (doors[playerInput] == 'c') {
				goat = Math.floor(Math.random() * 2); //if player guessed a car, return door 0 or 1
			} else {
				goat = (doors[0] != 'c') ? 0 : 1; //if player guessed a goat, return other goat door
			}
		break;
	}


	if (_debugLogs) {
		console.log("Moderator revealed door: ".blue, goat);
	}
	return goat;
}

exports.new = function() {
	return new Moderator();
}