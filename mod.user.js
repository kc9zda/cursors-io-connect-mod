// ==UserScript==
// @name         CursorsIoMods
// @namespace	 CursorsIoMods
// @version      0.1
// @description  modifications for cursors.io game
// @author       kc9zda
// @match        http://cursors.io/*
// @match        https://cursors.io/*
// @updateURL    https://raw.githubusercontent.com/kc9zda/cursors-io-connect-mod/master/mod.user.js
// @run-at       document-start
// @grant        none
// @noframes
// ==/UserScript==

// This is modified from agario/slitherio mods

if (window.location.hostname=="cursors.io"&&window.location.protocol==="http:"){
	window.location="https"+window.location.href.substr(4);
} else if (~["cursors.io"].indexOf(window.location.hostname)) {
	if(/Firefox/.test(navigator.userAgent)){
		var script = document.createElement('script');
		script.innerHTML = `console.log("cursorsio connect mod initializing");
			document.open();
			document.close();
			var htmlRequest = new XMLHttpRequest();
			htmlRequest.onreadystatechange = function() {
				if (htmlRequest.readyState == 4 && htmlRequest.status == 200) {
					document.onreadystatechange = function(){
						if(document.readyState!="complete")return;
						console.log("Caching downloaded DOM");
						document.write(htmlRequest.responseText);
						document.close();
					}
				}
			};
			htmlRequest.open("GET", "https://raw.githubusercontent.com/kc9zda/cursors-io-connect-mod/master/clone/index.html", true);
			htmlRequest.send();`;
		document.head.appendChild(script);
	} else {
		console.log("cursorsio connect mod initializing");
		document.open();
		document.close();
		var htmlRequest = new XMLHttpRequest();
		htmlRequest.onreadystatechange = function() {
			if (htmlRequest.readyState == 4 && htmlRequest.status == 200) {
				console.log("Caching downloaded DOM");
				document.write(htmlRequest.responseText);
				document.close();
			}
		};
		htmlRequest.open("GET", "https://raw.githubusercontent.com/kc9zda/cursors-io-connect-mod/master/clone/index.html", true);
		htmlRequest.send();
	}
}
