"use strict";


/* global PUBNUB */
var pn = PUBNUB.init({
	publish_key: 'pub-c-b0bbf1a2-7a07-4781-a629-d08bb6ce2511',
	subscribe_key: 'sub-c-f94133ac-316c-11e6-bfbc-02ee2ddab7fe',
});


pn.subscribe({
	channel: 'test',
	message: function (m) {
		console.log(`subscribe: ${m}`);
	},
});
