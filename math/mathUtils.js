
const MathUtils = {

	randomInt: function(low, high) {
		return low + Math.floor(Math.random() * (high - low + 1))
	}
}

module.exports = MathUtils