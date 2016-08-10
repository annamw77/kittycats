var request = require('request');
var dotenv = require('dotenv');
dotenv.load();

// PetFinderWrapper.myFunc1();


module.exports = {

	index: function (req, res) {
		var PetFinderWrapper = require('../../PetFinderWrapper.js');
		console.log(PetFinderWrapper)

		request('http://api.petfinder.com/pet.find?key=' + process.env.API_KEY + '&animal=cat&location=98005&format=json', function (error, response, body) {
		  if (!error && response.statusCode == 200) {
				return res.view('index', {
					searchresults: body
				});
		  }
		})
	}
};
