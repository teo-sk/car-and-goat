var prompt = require('prompt'),
	colors = require('colors'),
	helper = require('./helper/console'),
  doorGenerator = require('./helper/door_generator'),
  stats = require('./helper/stat_counter'),
  playerAI = require('./ai/player'),
  moderatorAI = require('./ai/moderator');

//global config
_debugLogs = false;
 
prompt.start();

console.reset();
console.car();
console.goat();
console.goat();
console.log('WELCOME TO THE CAR AND GOATS COMPETITION! \n'.rainbow);


prompt.get([{
	name: 'mode',
	message: 'What mode would you like to run? P for play, S for simulation',
	validator: /P|S/,
	warning: "Please respond P or S",
  default: "S"
}], function(err, result) {
	if (err) { return onErr(err); }
    if (result.mode == "P") {
      console.log("This mode will be available soon. Sorry :( ".gray);
      return 1;
    } else {
      console.log('This mode will run the game x times. \nThere always will be three players, one never changing their decision, second who always does, and third, random.'.gray);
      prompt.get([{
        name: 'iterations',
        message: 'How many times would you like to simulate the game? Between 1 and 1.000.000',
        default: 1000,
        conform: function (value) {
          return (value >= 1 && value <= 1000000);
        },
        warning: "Please eneter a number between 1 and one million"
      }], function(err, result) {
        if (err) { return onErr(err); }
        var moderator = moderatorAI.new(), //moderator
            statCounter = stats.new(),
            player, i, j, doors, finalGuess, finalResult, msg;

        for (i = 0; i < result.iterations; i++) {
          doors = doorGenerator.generateDoors();
          for (j = 0; j < 3; j++) {
            player = playerAI.new(j);
            if (!statCounter.stats['player' + j]) statCounter.stats['player' + j] = [];

            if (_debugLogs) {
              console.log('Player '.green + player.type + 's turn'.green);
            }
            
            finalGuess = (player.secondGuess(moderator.revealGoat(doors, player.guess())));
            finalResult = (doors[finalGuess] == 'c');
            statCounter.stats['player' + j].push(finalResult);
            msg = (finalResult) ? 'Player ' + player.type + ' won a car!'.rainbow : 'Player ' + player.type + ' won a goat :('.grey;

            if (_debugLogs) {
              console.log(msg);

            }
          }
          if (_debugLogs) {
             console.log('****************************************'.grey);
          }
        }

        statCounter.getStats();
      });
    }
});


function onErr(err) {
  console.log(err);
  return 1;
}