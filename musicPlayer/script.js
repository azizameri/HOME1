var jukebox = document.querySelector('ul.player');

jukebox.addEventListener('click',function(e){
		
	var songName = e.target.getAttribute('data-src');
	var songPlaying = document.querySelector('#player');
	
	if(songPlaying) {
		
		if (songName === songPlaying.getAttribute('src')) {
			
			if(songPlaying.paused) {
				songPlaying.play();
				e.target.id = 'playing';			
			} else {
				songPlaying.pause();
				e.target.id = 'paused';
			}
			
		} else {
			songPlaying.src = songName;
			songPlaying.play();
			if(document.querySelector('#playing')){ 
			document.querySelector('#playing').id = "";
			e.target.id = 'playing';
			} else {
				document.querySelector('#paused').id = "";
			}
			e.target.id = 'playing';
		}
		
		
	} else {
		var audioPlayer = document.createElement('audio');	
		audioPlayer.id = 'player';
		e.target.id = 'playing';
		audioPlayer.src = songName;
		document.body.appendChild(audioPlayer);	
		audioPlayer.play();
		audioPlayer.addEventListener('ended',function(){
		audioPlayer.parentNode.removeChild(audioPlayer);
		e.target.id = "";
		},false);
		
	}
	

},false);


(function(){
'use strict';

document.addEventListener('DOMContentLoaded', function(){
var currentTime = document.getElementById('current-time'),
	currentDate = document.getElementById('current-date');

setInterval(function() {
	var d = new Date();

	var hours = d.getHours(),
		minutes = d.getMinutes(),
		month = formatMonth(d.getMonth()),
		date = d.getDate(),
		ampm = 'AM';

	if (hours > 12) {
		hours -= 12;
		ampm = 'PM';
	} else if (hours === 0) {
		hours = 12;
	}

	if (minutes < 10) {
		minutes = '0' + minutes;
	}

	var sepClass = '';
	if (d.getSeconds() % 2 === 1) sepClass = 'trans';

	var sep = '<span class="' + sepClass + '">:</span>';

	currentTime.innerHTML = hours + sep + minutes + ' ' + ampm;
	currentDate.textContent = month + ' ' + date;
}, 1000);

function formatMonth(m) {
	m = parseInt(m, 10);

	if (m < 0) {
		m = 0;
	} else if (m > 11) {
		m = 11;
	}

	/*
	var monthName;
	switch(m) {
		case 0 :
			monthName = "January";
			break;
		case 1 :
			monthName = "February";
			break;
		// and so on...
	}
	*/

	var monthNames = [
		'January', 'February', 'March',
		'April', 'May', 'June', 
		'July', 'August', 'September',
		'October', 'November', 'December'
	];

	return monthNames[m];
}
});


})();