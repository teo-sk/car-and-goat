exports = function() {
	console.reset = function () {
	  return process.stdout.write('\033c');
	}

	console.car = function () {
		console.log("                   .--------. \n".blue +
"              ____/_____|___ \\___ \n".blue +
"             O    _   - |   _   ,* \n".blue +
"              '--(_)-------(_)--'  \n".blue);
	}

	console.goat = function() {
		console.log("            _)) \n".red +
"           > *\\     _~  \n".red +
"           `;'\\\\__-' \\_  \n".red +
"              | )  _ \\ \\  \n".red +
"             / / ``   w w \n".red +
"            w w \n".red);
	}
}()
