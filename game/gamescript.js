var heroDamage = 3;

$(document).ready(function(){
	populateLevel(level);
	var yAxis=1;
	var xAxis=1;
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
				if ( duration < 750 ){
					if (map[yAxis+1][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=50px'}, 100);
					} else {
						$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis+2] === "undefined" || map[yAxis+1][xAxis].terrain == 1 && map[yAxis+2][xAxis].terrain == 1){
						$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
					} else if (map[yAxis+2][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis+=2][xAxis], {'top' : '+=100px'}, 100);
					} else if (map[yAxis+2][xAxis].terrain == 1){
						moveToon('#toon', map[yAxis+=1][xAxis], {'top' : '+=60px'}, 50)
						$("#toon").animate({'top' : '-=10px'}, 50);
					}
				}
			} else if (e.keyCode == 87){
				if ( duration < 750 ){
					if (map[yAxis-1][xAxis].terrain != 1){
						moveToon("#toon", map[yAxis-=1][xAxis], {'top' : '-=50px'}, 100);
					} else {
						$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis-2] === "undefined" || map[yAxis-1][xAxis].terrain == 1 &&  map[yAxis-2][xAxis].terrain == 1){
						$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
					} else if (map[yAxis-2][xAxis].terrain != 1){
						moveToon('#toon', map[yAxis-=2][xAxis], {'top' : '-=100px'}, 100);
					} else if (map[yAxis-2][xAxis].terrain == 1){
						moveToon('#toon', map[yAxis-=1][xAxis], {'top' : '-=60px'}, 50);
						$("#toon").animate({'top' : '+=10px'}, 50);
					}
				}
			} else if (e.keyCode == 65){
				if ( duration < 750 ){
					if (map[yAxis][xAxis-1].terrain != 1){
						moveToon("#toon", map[yAxis][xAxis-=1], {'left' : '-=50px'}, 100);
					} else {
						$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis][xAxis-2] === "undefined" || map[yAxis][xAxis-1].terrain == 1 && map[yAxis][xAxis-2].terrain == 1){
						$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
					} else if (map[yAxis][xAxis-2].terrain != 1){
						moveToon('#toon', map[yAxis][xAxis-=2], {'left' : '-=100px'}, 100);
					} else if (map[yAxis][xAxis-2].terrain == 1){
						moveToon('#toon', map[yAxis][xAxis-=1], {'left' : '-=60px'}, 50)
						$("#toon").animate({'left' : '+=10px'}, 50);
					}
				}
			} else if (e.keyCode == 68){
				if ( duration < 750 ){
					if (map[yAxis][xAxis+1].terrain != 1){
						moveToon("#toon", map[yAxis][xAxis+=1], {'left' : '+=50px'}, 100);
					} else {
						$("#toon").animate({'left' : '+=10px'}, 50).animate({'left' : '-=10px'}, 50);
					}
				} else {
					if (typeof map[yAxis][xAxis+2] === "undefined" || map[yAxis][xAxis+1].terrain == 1 && map[yAxis][xAxis+2].terrain == 1){
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

	function moveUpDown(){
		for(i=0; i < foesUpDown.length; i++){
			if (foesUpDown[i].direction == "negative"){
				if (map[foesUpDown[i].y-1][foesUpDown[i].x].terrain != 1){
					moveToon('#' + foesUpDown[i].id, map[foesUpDown[i].y-=1][foesUpDown[i].x], {'top' : '-=50px'}, 190);
				} else if (map[foesUpDown[i].y-1][foesUpDown[i].x].terrain == 1){
					foesUpDown[i].direction = "positive";
					moveToon('#' + foesUpDown[i].id, map[foesUpDown[i].y+=1][foesUpDown[i].x], {'top' : '+=50px'}, 190);
				}
			} else {
				if (map[foesUpDown[i].y+1][foesUpDown[i].x].terrain != 1){
					moveToon('#' + foesUpDown[i].id, map[foesUpDown[i].y+=1][foesUpDown[i].x], {'top' : '+=50px'}, 190);
				} else if (map[foesUpDown[i].y+1][foesUpDown[i].x].terrain == 1){
					foesUpDown[i].direction = "negative";
					moveToon('#' + foesUpDown[i].id, map[foesUpDown[i].y-=1][foesUpDown[i].x], {'top' : '-=50px'}, 190);
				}
			}
		}
	};
	function moveLeftRight(){
		for(j=0; j < foesLeftRight.length; j++){
			if (foesLeftRight[j].direction == "negative"){
				if (map[foesLeftRight[j].y][foesLeftRight[j].x-1].terrain != 1){
					moveToon('#' + foesLeftRight[j].id, map[foesLeftRight[j].y][foesLeftRight[j].x-=1], {'left' : '-=50px'}, 190);
				} else if (map[foesLeftRight[j].y][foesLeftRight[j].x-1].terrain == 1){
					foesLeftRight[j].direction = "positive";
					moveToon('#' + foesLeftRight[j].id, map[foesLeftRight[j].y][foesLeftRight[j].x+=1], {'left' : '+=50px'}, 190);
				}
			} else {
				if (map[foesLeftRight[j].y][foesLeftRight[j].x+1].terrain != 1){
					moveToon('#' + foesLeftRight[j].id, map[foesLeftRight[j].y][foesLeftRight[j].x+=1], {'left' : '+=50px'}, 190);
				} else if (map[foesLeftRight[j].y][foesLeftRight[j].x+1].terrain == 1){
					foesLeftRight[j].direction = "negative";
					moveToon('#' + foesLeftRight[j].id, map[foesLeftRight[j].y][foesLeftRight[j].x-=1], {'left' : '-=50px'}, 190);
				}
			}
		}
	};
	setInterval(moveLeftRight, 200);
	setInterval(moveUpDown, 200);
});

/////////////////////////
/// MOVEMENT & DAMAGE ///
/////////////////////////

var heroPosition;
var foePosition=[];
var damaged = false;
function moveToon(selector, position, change, speed){
	$(selector).animate(change , speed);
	if (selector == "#toon"){
		heroPosition = position;
	} else if (selector.substring(0,4) == "#foe"){
			if (enemyExists(selector) == false){
				foePosition.push({
					unitDesignation: selector,
					unitPosition: position
				});
			} else {
				for (i = 0; i < foePosition.length; i++){
					if (foePosition[i].unitDesignation == selector){
						foePosition[i].unitPosition = position;
					}
				}
			};
	};
	if (enemyIsThere(heroPosition) == true && damaged == false){
		console.log(damaged);
		damaged = true;
		heroDamage--;
		if (heroDamage == 0){
			heroDamage=3;
		}
	}else{
		damaged = false;
	}
}

function enemyExists(enemyID) {
  return foePosition.some(function(el) {
    return el.unitDesignation === enemyID;
  });
}
function enemyIsThere(heroPosition) {
  return foePosition.some(function(el) {
    return el.unitPosition === heroPosition;
  });
}
///////////////////
/// MAP BUILDER ///
///////////////////

var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			 [1, 2, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 2, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			 [1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			 [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			 [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			 [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],
			 [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
			 [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
			 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var map = [];
var foesUpDown = [];
var foesLeftRight = [];
function populateLevel(lvl) {
	var count = 0;
	for (var y=0; y<lvl.length; y++) {
		var row = [];
		for (var x=0; x<lvl[y].length; x++) {
			if (lvl[y][x]==1){
				var wall = new terrainObj(x * 50, y * 50, "wall", count, lvl[y][x]);
				row.push(wall);
				count++;
			} else if (lvl[y][x]==0 || lvl[y][x]==2 || lvl[y][x]==3){
				var free = new terrainObj(x * 50, y * 50, "free", count, lvl[y][x]);
				row.push(free);
				count++;
			}
			if(lvl[y][x]==2){
				var enemyUnit = new nPCObj(x, y, "foe", count);
				foesUpDown.push(enemyUnit);
			}else if(lvl[y][x]==3){
				var enemyUnit = new nPCObj(x, y, "foe", count);
				foesLeftRight.push(enemyUnit);
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

function nPCObj(x, y, id, count) {
	$("#container").append("<div id='" + id + count + "' class='foe'></div>");
	$("#" + id + count).css("top", 10 + (y * 50) + "px");
	$("#" + id + count).css("left", 10 + (x * 50) + "px");
	this.id = id + count;
	this.x = x;
	this.y = y;
	this.direction = "positive";
}
