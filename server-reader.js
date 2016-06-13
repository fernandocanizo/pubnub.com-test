"use strict";


var pubnub = require("pubnub")({
	ssl: true, // <- enable TLS Tunneling over TCP
	publish_key   : "pub-c-b0bbf1a2-7a07-4781-a629-d08bb6ce2511",
	subscribe_key : "sub-c-f94133ac-316c-11e6-bfbc-02ee2ddab7fe",
});


function publish(message) {
	pubnub.publish({
		channel: 'test',
		message: message,
		callback: function(e) {
			console.log("SUCCESS!", e);
		},
		error: function(e) {
			console.log( "FAILED! RETRY PUBLISH!", e );
		}
	});
}

process.stdin.resume();
process.stdin.setEncoding('utf8');

var _input = '';

process.stdin.on('data', function (data) {
	_input += data;
});

process.stdin.on('end', function () {
	publish(_input);
});

pubnub.subscribe({
	channel  : "test",
	message : function(message) {
		console.log( "> ", message );
	}
});
