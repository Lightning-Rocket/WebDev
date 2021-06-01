x = 'x'; o = 'o';
cur_play = x;
box = ['_', '_', '_', '_', '_', '_', '_', '_', '_'];
win = [[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]];
places_left = [0,1,2,3,4,5,6,7,8];	
gmode = ""

function arrayRemove(arr, value) {
   return arr.filter(function(geeks){
       return geeks != value;
   });  
}

function putBox(b) {
	btnid = "b"+b;
	var btn = document.getElementById(btnid);
	
	btn.innerHTML = cur_play;
	btn.disabled = true;
	
	box[b] = cur_play;
	places_left = arrayRemove(places_left, b);
}

function posCPU() { return places_left[Math.floor(Math.random()*places_left.length)]; }

function playerDetails() {
	var mode = document.querySelectorAll('input[name="mode"]');
	if (mode[0].checked) {
		gmode = "P2";
		if (document.getElementById("player1").value==null || document.getElementById("player2").value=='')
			alert("Enter Player names to start the game!")
		else
			game_run(true);
	} else if (mode[1].checked) {
		gmode = "CPU"
		document.getElementById("player2").value = 'CPU';
		if (document.getElementById("player1").value == null)
			alert("Enter Player name to start the game!")
		else
			game_run(true);
	} else {
		alert("Select Mode to continue!")
	}	
}

function game_run(state) {
	var play_btns = document.getElementsByClassName('play_btns');
	if (state) {
		for (var i=0;i<9;i++)
			play_btns[i].disabled = false;
	} else {
		for (var i=0;i<9;i++)
			play_btns[i].disabled = true;
	}
}

function checkWin() {
	for (var i=0;i<8;i++) {
		if (box[win[i][0]]==cur_play && box[win[i][1]]==cur_play && box[win[i][2]]==cur_play) {
			if (cur_play==x)
				document.getElementById('show').innerHTML = document.getElementById("player1").value+"("+cur_play+") won";
			else if (cur_play==o)
				document.getElementById('show').innerHTML = document.getElementById("player2").value+"("+cur_play+") won";
			game_run(false);
		}
	}
}

function Game(pos) {
	var draw = false, count=0;
	for (var i=0;i<8;i++)
		if (box[i]!='_')
			count += 1;
	if (count==8) draw = true
	if (!draw){
		
		putBox(pos);			
		checkWin();
		
		if (cur_play==x)
			cur_play = o;
		else if (cur_play==o)
			cur_play = x;
			
	} else document.getElementById('show').innerHTML = "Draw";
	if (gmode == "CPU") {
		putBox(posCPU())
		if (cur_play==x)
			cur_play = o;
		else if (cur_play==o)
			cur_play = x;
	}
}