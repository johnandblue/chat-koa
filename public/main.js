'use strict';

let saveForismatic = function (response) {
	$.ajax({
		method: 'POST',
		url: '/messages',
		data: {
			user: 'forismatic',
			content: response.quoteText + response.quoteAuthor,
			timestamp: Date.now()
		},
		// success: function (data) {
		// 	renderQuote(data);
		// },
	});
}

function parseQuote(response) {
	$('.chatbox').append('<div class="userBallon2">'+ response.quoteText + '<p>' + response.quoteAuthor + '</p>' + '</div>' + "<p></p>");
	saveForismatic(response);
}



function renderQuote (quote) {
	let classUser = 'userBallon';
	if (quote.user === 'forismatic') classUser = 'userBallon2';
	$('.chatbox').append('<div class="'+ classUser +'">'+ quote.content + '</div> ');
}

$(function () {


	$.ajax({
		method: "GET",
		url: '/messages',
		success: function (msgs) {
			msgs.forEach(function (msg) {
				renderQuote(msg);
			});
		}
	});


	$('#send').click(function() {

		let chatDiv = document.getElementsByClassName('chatBox')[0];
		chatDiv.scrollTop = chatDiv.scrollHeight;

		let newMsg = $('.userMsg').val();
		$('.chatbox').append('<div class="userBallon">' + newMsg + '</div>');
		$('.userMsg').val('');

		$.ajax({
			method: "POST",
			url: '/messages',
			data: {
				user: 'user1',
				content: newMsg,
				timestamp: Date.now()
			},
			// success:
			// dataType: 'json',
			// contentType: 'application/json'
		});

		$.ajax({
			method: "GET",
			url: "http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote&lang=en",
			dataType: "jsonp",
			success: function (data) {

			}
		})



	});
	$(".userMsg").keyup(function(event){
		let chatDiv = document.getElementsByClassName('chatBox')[0];
		chatDiv.scrollTop = chatDiv.scrollHeight;
		if(event.keyCode == 13){
			$("#send").click();
		};
	});

	$('#delete').click(function() {
		$.ajax({
			method: 'POST',
			url: '/deleteMsgs',
			data: '',
			success: function (data) {
			},
			dataType: 'json'
		});
		$('.chatbox').html('');
	});
});
