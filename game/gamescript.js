$(document).ready(function(){
	populateLevel(level);
	var yAxis=1;
	var xAxis=1;
	var foeY=5;
	var foeX=5;
	var pressed = {};


	$(document).keydown(function(e) {
	    if ( pressed[e.which] ) return;
	    pressed[e.which] = e.timeStamp;
	});
	$(document).keyup(function (e) {
			if ( !pressed[e.which] ) return;
			var duration = ( e.timeStamp - pressed[e.which]);
			// Key "e.which" was pressed for "duration" seconds
			pressed = {};
			if (e.keyCode == 83){
				if( duration < 750 ){
					if (map[yAxis+1][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=50px'}, 100);
					} else {
						$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis+2] === "undefined"){
						$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
					} else if (map[yAxis+2][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis+=2][xAxis], {'top' : '+=100px'}, 100);
					} else if (map[yAxis+2][xAxis].terrain == 1){
						moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=60px'}, 50)
						$("#toon").animate({'top' : '-=10px'}, 50);
					}
				}
			} else if (e.keyCode == 87){
				if( duration < 750 ){
					if(map[yAxis-1][xAxis].terrain != 1){
						moveToon("#toon", map[yAxis-=1][xAxis], {'top' : '-=50px'}, 100);
					} else {
						$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis-2] === "undefined"){
						$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
					} else if (map[yAxis-2][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis-=2][xAxis], {'top' : '-=100px'}, 100);
					} else if (map[yAxis-2][xAxis].terrain == 1){
						moveToon('#toon', map[yAxis-=1][xAxis], {'top' : '-=60px'}, 50);
						$("#toon").animate({'top' : '+=10px'}, 50);
					}
				}
			} else if (e.keyCode == 65){
				if( duration < 750 ){
					if(map[yAxis][xAxis-1].terrain != 1){
						moveToon("#toon", map[yAxis][xAxis-=1], {'left' : '-=50px'}, 100);
					}else{
						$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis][xAxis-2] === "undefined"){
						$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
					} else if (map[yAxis][xAxis-2].terrain != 1){
						moveToon('#toon', map[yAxis][xAxis-=2], {'left' : '-=100px'}, 100);
					} else if (map[yAxis][xAxis-2].terrain == 1){
						moveToon('#toon', map[yAxis][xAxis-=1], {'left' : '-=60px'}, 50)
						$("#toon").animate({'left' : '+=10px'}, 50);
					}
				}
			} else if (e.keyCode == 68){
				if( duration < 750 ){
					if(map[yAxis][xAxis+1].terrain != 1){
						moveToon("#toon", map[yAxis][xAxis+=1], {'left' : '+=50px'}, 100);
					}else{
						$("#toon").animate({'left' : '+=10px'}, 50).animate({'left' : '-=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis][xAxis+2] === "undefined"){
						$("#toon").animate({'left' : '+=10px'}, 50).animate({'left' : '-=10px'}, 50);
					} else if (map[yAxis][xAxis+2].terrain != 1){
						moveToon('#toon', map[yAxis][xAxis+=2], {'left' : '+=100px'}, 100);
					} else if (map[yAxis][xAxis+2].terrain == 1){
						moveToon('#toon', map[yAxis][xAxis+=1], {'left' : '+=60px'}, 50)
						$("#toon").animate({'left' : '-=10px'}, 50);
					}
				}
			}
	});

	var direction = "positive";
	function enemyMovement(){
		if (direction == "negative"){
			if (map[foeY-1][foeX].terrain == 0){
				moveToon('#foe', map[foeY-=1][foeX], {'top' : '-=50px'}, 100);
			} else if (map[foeY-1][foeX].terrain != 0){
				direction = "positive";
				moveToon('#foe', map[foeY+=1][foeX], {'top' : '+=50px'}, 100);
			}
		} else {
			if (map[foeY+1][foeX].terrain == 0){
				moveToon('#foe', map[foeY+=1][foeX], {'top' : '+=50px'}, 100);
			} else if (map[foeY+1][foeX].terrain != 0){
				direction = "negative";
				moveToon('#foe', map[foeY-=1][foeX], {'top' : '-=50px'}, 100);
			}
		}
	};
	setInterval(enemyMovement, 100);
});

/////////////////////////
/// MOVEMENT & DAMAGE ///
/////////////////////////

var heroPosition;
var foePosition;

function moveToon(selector, position, change, speed){
	$(selector).animate(change , speed);
	if (selector == "#toon"){
		heroPosition = position;
	}else if (selector == "#foe"){
		foePosition = position;
	}
	if (heroPosition == foePosition){
		console.log("ouch");
	}
};

///////////////////
/// MAP BUILDER ///
///////////////////


var level = [[1, 1, 1, 1, 1, 1, 1],
						 [1, 0, 0, 0, 0, 0, 1],
						 [1, 0, 1, 0, 1, 0, 1],
						 [1, 0, 0, 0, 0, 0, 1],
						 [1, 0, 1, 0, 1, 0, 1],
						 [1, 0, 0, 0, 0, 0, 1],
						 [1, 1, 1, 1, 1, 1, 1]];

var map = [];

function populateLevel(lvl) {
	var count = 0;
	for (var y=0; y<lvl.length; y++) {
		var row = [];
		for (var x=0; x<lvl[y].length; x++) {
			if (lvl[y][x]==1){
				var wall = new terrainObj(x * 50, y * 50, "wall", count, lvl[y][x]);
				row.push(wall);
				count++;
			}else if (lvl[y][x]==0){
				var free = new terrainObj(x * 50, y * 50, "free", 0, lvl[y][x]);
				row.push(free);
			}
		}
		map.push(row);
		row=[];
	}
};

function terrainObj(x, y, id, count, terrain) {
	$("#container").append("<div id='" + id + count + "' class='obj " + id +"'></div>");
	$("#" + id + count).css("top", y + "px");
	$("#" + id + count).css("left", x + "px");
	this.id = id + count;
	this.x = x;
	this.y = y;
	this.terrain = terrain;
}

// moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=50px'}, 100);
//
//
// if (map[yAxis+1][xAxis].terrain != 1){
// 	moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=50px'}, 100);
// } else {
// 	$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
// }
// }
//
// megaMove(map[yAxis+2][xAxis], 50, map[yAxis+1][xAxis], {'top' : '+=100px'}, {'top' : '+=10px'}, {'top' : '+=60px'}, {'top' : '-=10px'}, yAxis)
//
// function megaMove(mapLocation, timer, mapShimy, movement, bounce, bound, rebound, y){
// 	if (typeof map[y+2] === "undefined"){
// 		$(toon).animate(bounce, timer).animate(rebound, timer);
// 	} else if (mapLocation.terrain != 1){
// 		moveToon(toon, mapLocation, movement, timer * 2);
// 	} else if (mapLocation.terrain == 1){
// 		moveToon(toon, mapShimy, bound, timer)
// 		$(toon).animate(rebound, timer);
// 	}
// }
