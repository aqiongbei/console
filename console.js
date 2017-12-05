// var console = (function (){
// 	var _console = console;
// 	function log() {

// 	}
// 	function warn() {

// 	}
// 	return {
// 		log();
// 	};
// })();

// $.console = console;
// 
// 
// 
function _console (con){
	var str = 'aqiongbei@console /$: ' + (con || '%cplease type your word');
	var lineLen = 500;
	var index = 0;
	var len = str.length;
	var info = 'color: rgba(0, 255, 0, 1); background: rgba( 0, 0, 0, 1); font-size: 1.2em; line-height: 20px';
	var warn = 'color: rgba(255, 0, 0, 1); background: rgba( 0, 0, 0, 1); font-size: 1.2em; line-height: 20px';
	var timer = setInterval(function (){
		if (index > len) {
			clearInterval(timer);
			// console.log('%c' + formatStr + 'GAME OVER' + formatStr, css);
		} else {
			console.clear();
			if (con) {
				console.log('%c' + str.slice(0, index) + formatLine(lineLen - index - 2), info)
			} else {
				console.log('%c' + str.slice(0, index) + formatLine(lineLen - index - 2), info, warn)
			}
			index ++;
		}
	}, 180)
}

function formatLine(len){
	var str = ' ';
	for (var i = 0; i <= len; i ++) {
		str += ' ';
	}
	return str;
}