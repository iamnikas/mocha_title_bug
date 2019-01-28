let async_request = require('async-request'), response;
	
// init custom var in global
global.environment = {}

before(async function() {
	// runs before all tests in this block
	console.log('[ROOT] ROOT HOOK before');
	let get_settings_tick = await async_request('https://api.exmo.me/v1/ticker/');
	
	if(get_settings_tick.statusCode !== 200){

	}
	let response_body = JSON.parse(get_settings_tick.body)

	// random get item
	let max_items = Object.keys(response_body).length
	let rnd_index = Math.floor(Math.random() * (max_items - 0)) + 0;

	//get item key and set the global var
	global.environment.tick = Object.keys(response_body)[rnd_index]
});


describe('[RUN TESTS]', function() {
	it('[TEST] /GET http://test.com?tick=' + global.environment.tick, function(done) {
		// Expected in console:
		//- [TEST] /GET http://test.com?tick=<real_value-not_undefined>
		done();
	})
})