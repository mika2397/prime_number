module.exports = {
	isPrime: function(n) {
		if(n <=1) {
			return false;
		}

		let div = 2;

		while(div <= Math.sqrt(n)) {
			if(n % div === 0) {
				return false;
			}

			div++;
		}

		return true;
	}
}

module.exports = {
	    print: function(a,b) {
	        const numbers = []
	        for (let i = a; i <= b; i++){
	            numbers.push(i)
	        }
	    }
	}
	
	