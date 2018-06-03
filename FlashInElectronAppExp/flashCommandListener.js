function testmovie_DoFSCommand(command, args) {
	if (command == "call_alert") {
		alert("Here's the Flash message: " + args);
	}
}

function movieElement(movieName) {
	// IE and Netscape refer to the movie object differently.
	// This function returns the appropriate syntax depending on the browser.
	if (navigator.appName.indexOf("Microsoft") != -1) {
		return window[movieName];
	} else {
		return document[movieName];
	}
}

function checkSWF(movieName) {
	console.log("Percent load: " + movieElement(movieName).PercentLoaded());
}

function loadSWF() {
	/*
	    <embed name="testmovie" src="flash-to-javascript.swf" width="100%" height="100%" play="false" loop="false" quality="high" scale="SHOWALL"
	        swLiveConnect="true" pluginspage="http://www.macromedia.com/go/flashplayer">
	    </embed>
	*/
	let ele = document.createElement("embed");
	ele.name = "testmovie";
	ele.src = "flash-to-javascript.swf";
	ele.width = "100%";
	ele.height = "100%";
	ele.setAttribute('play', "false");
	ele.setAttribute('loop', "false");
	ele.setAttribute('quality', "high");
	ele.setAttribute('scale', "SHOWALL");
	ele.setAttribute('swLiveConnect', "true");
	ele.setAttribute('pluginspage', "http://www.macromedia.com/go/flashplayer");
	$("#flashContainer").html(ele);
	//console.log("Percent load: " + ele.PercentLoaded());
	checkSWF(ele.name);
}
