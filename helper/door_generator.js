exports.generateDoors = function() {
	var doors = ['g', 'g', 'g']; //all doors have a goat
	doors[Math.floor(Math.random() * 3)] = 'c'; //random door gets car

	if (_debugLogs) {
		console.log("Generated doors:".blue, doors);
	}
	return doors;
}