// function dayTimeSwop(){

// 	var d = new Date();
// 	var n = d.getHours();

// 	if (n>19) {
// 		// If time is 7PM or later apply night theme to ‘body’
// 		$(‘body’).addClass(‘night’);
// 		else if (n > 16 && n < 19)
// 		// If time is between 4PM – 7PM sunset theme to ‘body’
// 		$(‘body’).addClass(‘sunset’);
// 		else
// 		// Else use ‘day’ theme
// 		$(‘body’).addClass(‘day’);
// 	}
// }

// window.onload = applyclass;

function dayTimeSwop(){

	var d = new Date().getHours();
	

	if(0 <= currentT&&currentT <5){
		// If time is 7PM or later apply night theme to ‘body’
		$(‘body’).addClass(‘night’);
	}	
	else if (5 <= currentT&&currentT < 11){
		// If time is between 4PM – 7PM sunset theme to ‘body’
		$(‘body’).addClass(‘morning’);
	}	
	
	else if(11 <= currentT&&currentT < 16){
		// Else use ‘day’ theme
		$(‘body’).addClass(‘day’);
	}

	else if(16 <= currentT&&currentT < 22){
		$(‘body’).addClass(‘evening’);
	}

	else if(22 <= currentT&&currentT < 24){
		$(‘body’).addClass(‘night’);
	}
}

window.onload = applyclass;
