var StatCounter = function() {
	this.stats = {};
};

StatCounter.prototype.getStats = function() {
	var obj, sum, pctg
		self = this;
	Object.keys(self.stats).forEach(function(key) {
		obj = self.stats[key];
		sum = obj.reduce(function(pv, cv) { return pv + cv; }, 0);
		pctg = Math.floor((sum / obj.length) * 100)
		console.log('Player ' + key + ' won ' + sum + ' times out of ' + obj.length + ' which is ' + pctg + '%');
	})
}

exports.new = function() {
	return new StatCounter();
}