function getStylesheet(){

	var currentT = new Date().getHours();
	if(0 <= currentT&&currentT <5){
		document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
	}

	if(5 <= currentT&&currentT < 11){
		document.write("<link rel='stylesheet' href='morning.css' type='text/css'>");
	}

	if(11 <= currentT&&currentT < 16){
		document.write("<link rel='stylesheet' href='day.css' type='text/css'>");
	}

	if(16 <= currentT&&currentT < 22){
		document.write("<link rel='stylesheet' href='evening.css' type='text/css'>");
	}

	if(22 <= currentT&&currentT < 24){
		document.write("<link rel='stylesheet' href='night.css' type='text/css'>");
	}
}

getStylesheet();

/* if no javascript is enabled we will need to pass a 
default css style to use

<noscript><link href="main.css" rel="stylesheet"></noscript>
*/