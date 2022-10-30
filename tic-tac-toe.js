let player = Math.floor(Math.random() * 2);
let pressedButtons = 0;

function start() {
	if (player === 0) {
		document.getElementById("playerId").innerHTML = "It's 0's turn";
	} else {
		document.getElementById("playerId").innerHTML = "It's X's turn";
	}
	for (let i = 10; i < 19; ++i) {
		document.getElementById(i).disabled = false;
	}
	document.getElementById('restart').removeAttribute("hidden");
	document.getElementById('start').setAttribute("hidden", "hidden");
	return false;
}

function addPlayer(boxNumber) {
	let playerId;
	++pressedButtons;
	if (player === 0) {
		document.getElementById("playerId").innerHTML = "It's X's turn";
		playerId = "0";
		player = 1;
	} else {
		document.getElementById("playerId").innerHTML = "It's 0's turn";
		playerId = "X";
		player = 0;
	}
	document.getElementById(boxNumber).innerHTML = playerId;
	if (document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML &&  document.getElementById("3").innerHTML === "X" || 
		document.getElementById("4").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("6").innerHTML &&  document.getElementById("6").innerHTML === "X" ||
		document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && document.getElementById("8").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "X" ||
		document.getElementById("1").innerHTML === document.getElementById("4").innerHTML && document.getElementById("4").innerHTML === document.getElementById("7").innerHTML &&  document.getElementById("7").innerHTML === "X" || 
		document.getElementById("2").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("8").innerHTML &&  document.getElementById("8").innerHTML === "X" ||
		document.getElementById("3").innerHTML === document.getElementById("6").innerHTML && document.getElementById("6").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "X"  ||
		document.getElementById("1").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "X"||
		document.getElementById("3").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("7").innerHTML &&  document.getElementById("7").innerHTML === "X") {
		document.getElementById("winningPlayer").innerHTML = "Player: 'X' won!";
		for (let i = 10; i < 19; ++i) {
			document.getElementById(i).disabled = true;
		}
	} else if (document.getElementById("1").innerHTML === document.getElementById("2").innerHTML && document.getElementById("2").innerHTML === document.getElementById("3").innerHTML &&  document.getElementById("3").innerHTML === "0" || 
		document.getElementById("4").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("6").innerHTML &&  document.getElementById("6").innerHTML === "0" ||
		document.getElementById("7").innerHTML === document.getElementById("8").innerHTML && document.getElementById("8").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "0" ||
		document.getElementById("1").innerHTML === document.getElementById("4").innerHTML && document.getElementById("4").innerHTML === document.getElementById("7").innerHTML &&  document.getElementById("7").innerHTML === "0" || 
		document.getElementById("2").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("8").innerHTML &&  document.getElementById("8").innerHTML === "0" ||
		document.getElementById("3").innerHTML === document.getElementById("6").innerHTML && document.getElementById("6").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "0" ||
		document.getElementById("1").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("9").innerHTML &&  document.getElementById("9").innerHTML === "0" ||
		document.getElementById("3").innerHTML === document.getElementById("5").innerHTML && document.getElementById("5").innerHTML === document.getElementById("7").innerHTML &&  document.getElementById("7").innerHTML === "0") {
		document.getElementById("winningPlayer").innerHTML = "Player: '0' won!";
		for (let i = 10; i < 19; ++i) {
			document.getElementById(i).disabled = true;
		}
	} else if (pressedButtons === 9){
		document.getElementById("winningPlayer").innerHTML = "EQUALITY!";
	}
	return false;
}