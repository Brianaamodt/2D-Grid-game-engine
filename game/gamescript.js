var heroDamage = 3;

$(document).ready(function(){
	populateLevel(level);
	var pressed = {};
	var facing = "right";
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
				if (facing != "down"){
					$("#" + playerUnit.id).css("left", 10 + (playerUnit.x * 50) + "px");
					$("#" + playerUnit.id).css("top", 20 + (playerUnit.y * 50) + "px");
					$("#" + playerUnit.id).css("width", "30px");
					$("#" + playerUnit.id).css("height", "20px");
					facing = "down";
				} else {
					if ( duration < 750 ){
						if (map[playerUnit.y+1][playerUnit.x].terrain != 1){
							moveToon('#toon', map[playerUnit.y+=1][playerUnit.x], {'top' : '+=50px'}, 100);
						} else {
							$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
						}
					} else {
						if (typeof map[playerUnit.y+2] === "undefined" || map[playerUnit.y+1][playerUnit.x].terrain == 1 && map[playerUnit.y+2][playerUnit.x].terrain == 1){
							$("#toon").animate({'top' : '+=10px'}, 50).animate({'top' : '-=10px'}, 50);
						} else if (map[playerUnit.y+2][playerUnit.x].terrain != 1){
							moveToon('#toon', map[playerUnit.y+=2][playerUnit.x], {'top' : '+=100px'}, 100);
						} else if (map[playerUnit.y+2][playerUnit.x].terrain == 1){
							moveToon('#toon', map[playerUnit.y+=1][playerUnit.x], {'top' : '+=60px'}, 50);
							$("#toon").animate({'top' : '-=10px'}, 50);
						}
					}
				}
			} else if (e.keyCode == 87){
				if (facing != "up"){
					$("#" + playerUnit.id).css("left", 10 + (playerUnit.x * 50) + "px");
					$("#" + playerUnit.id).css("top", 10 + (playerUnit.y * 50) + "px");
					$("#" + playerUnit.id).css("width", "30px");
					$("#" + playerUnit.id).css("height", "20px");
					facing = "up";
				} else {
					if ( duration < 750 ){
						if (map[playerUnit.y-1][playerUnit.x].terrain != 1){
							moveToon("#toon", map[playerUnit.y-=1][playerUnit.x], {'top' : '-=50px'}, 100);
						} else {
							$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
						}
					} else {
						if (typeof map[playerUnit.y-2] === "undefined" || map[playerUnit.y-1][playerUnit.x].terrain == 1 &&  map[playerUnit.y-2][playerUnit.x].terrain == 1){
							$("#toon").animate({'top' : '-=10px'}, 50).animate({'top' : '+=10px'}, 50);
						} else if (map[playerUnit.y-2][playerUnit.x].terrain != 1){
							moveToon('#toon', map[playerUnit.y-=2][playerUnit.x], {'top' : '-=100px'}, 100);
						} else if (map[playerUnit.y-2][playerUnit.x].terrain == 1){
							moveToon('#toon', map[playerUnit.y-=1][playerUnit.x], {'top' : '-=60px'}, 50);
							$("#toon").animate({'top' : '+=10px'}, 50);
						}
					}
				}
			} else if (e.keyCode == 65){
				if (facing != "left"){
					$("#" + playerUnit.id).css("left", 10 + (playerUnit.x * 50) + "px");
					$("#" + playerUnit.id).css("top", 10 + (playerUnit.y * 50) + "px");
					$("#" + playerUnit.id).css("width", "20px");
					$("#" + playerUnit.id).css("height", "30px");
					facing = "left";
				} else {
					if ( duration < 750 ){
						if (map[playerUnit.y][playerUnit.x-1].terrain != 1){
							moveToon("#toon", map[playerUnit.y][playerUnit.x-=1], {'left' : '-=50px'}, 100);
						} else {
							$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
						}
					} else {
						if (typeof map[playerUnit.y][playerUnit.x-2] === "undefined" || map[playerUnit.y][playerUnit.x-1].terrain == 1 && map[playerUnit.y][playerUnit.x-2].terrain == 1){
							$("#toon").animate({'left' : '-=10px'}, 50).animate({'left' : '+=10px'}, 50);
						} else if (map[playerUnit.y][playerUnit.x-2].terrain != 1){
							moveToon('#toon', map[playerUnit.y][playerUnit.x-=2], {'left' : '-=100px'}, 100);
						} else if (map[playerUnit.y][playerUnit.x-2].terrain == 1){
							moveToon('#toon', map[playerUnit.y][playerUnit.x-=1], {'left' : '-=60px'}, 50);
							$("#toon").animate({'left' : '+=10px'}, 50);
						}
					}
				}
			} else if (e.keyCode == 68){
				if (facing != "right"){
					$("#" + playerUnit.id).css("left", 20 + (playerUnit.x * 50) + "px");
					$("#" + playerUnit.id).css("top", 10 + (playerUnit.y * 50) + "px");
					$("#" + playerUnit.id).css("width", "20px");
					$("#" + playerUnit.id).css("height", "30px");
					facing = "right";
				} else {
					if ( duration < 750 ){
						if (map[playerUnit.y][playerUnit.x+1].terrain != 1){
							moveToon("#toon", map[playerUnit.y][playerUnit.x+=1], {'left' : '+=50px'}, 100);
						} else {
							$("#toon").animate({'left' : '+=10px'}, 50).animate({'left' : '-=10px'}, 50);
						}
					} else {
						if (typeof map[playerUnit.y][playerUnit.x+2] === "undefined" || map[playerUnit.y][playerUnit.x+1].terrain == 1 && map[playerUnit.y][playerUnit.x+2].terrain == 1){
							$("#toon").animate({'left' : '+=10px'}, 50).animate({'left' : '-=10px'}, 50);
						} else if (map[playerUnit.y][playerUnit.x+2].terrain != 1){
							moveToon('#toon', map[playerUnit.y][playerUnit.x+=2], {'left' : '+=100px'}, 100);
						} else if (map[playerUnit.y][playerUnit.x+2].terrain == 1){
							moveToon('#toon', map[playerUnit.y][playerUnit.x+=1], {'left' : '+=60px'}, 50);
							$("#toon").animate({'left' : '-=10px'}, 50);
						}
					}
				}
			};
			if (e.keyCode == 32){
				if (facing == "right" && enemyIsThere(map[playerUnit.y][playerUnit.x+1]) == true){
					console.log("hit!!!");
				} else if (facing == "left" && enemyIsThere(map[playerUnit.y][playerUnit.x-1]) == true){
					console.log("hit!!!");
				} else if (facing == "up" && enemyIsThere(map[playerUnit.y-1][playerUnit.x]) == true){
					console.log("hit!!!");
				} else if (facing == "down" && enemyIsThere(map[playerUnit.y+1][playerUnit.x]) == true){
					console.log("hit!!!");
				}
			};
	});

	function moveFoe(){
		for(j=0; j < foes.length; j++){
			if (foes[j].movement == "upDown"){
					if (foes[j].direction == "negative"){
						if (map[foes[j].y-1][foes[j].x].terrain != 1){
							moveToon('#' + foes[j].id, map[foes[j].y-=1][foes[j].x], {'top' : '-=50px'}, 240);
						} else if (map[foes[j].y-1][foes[j].x].terrain == 1){
							foes[j].direction = "positive";
							moveToon('#' + foes[j].id, map[foes[j].y+=1][foes[j].x], {'top' : '+=50px'}, 240);
						}
					} else {
						if (map[foes[j].y+1][foes[j].x].terrain != 1){
							moveToon('#' + foes[j].id, map[foes[j].y+=1][foes[j].x], {'top' : '+=50px'}, 240);
						} else if (map[foes[j].y+1][foes[j].x].terrain == 1){
							foes[j].direction = "negative";
							moveToon('#' + foes[j].id, map[foes[j].y-=1][foes[j].x], {'top' : '-=50px'}, 240);
						}
					}
				} else {
				if (foes[j].direction == "negative"){
					if (map[foes[j].y][foes[j].x-1].terrain != 1){
						moveToon('#' + foes[j].id, map[foes[j].y][foes[j].x-=1], {'left' : '-=50px'}, 240);
					} else if (map[foes[j].y][foes[j].x-1].terrain == 1){
						foes[j].direction = "positive";
						moveToon('#' + foes[j].id, map[foes[j].y][foes[j].x+=1], {'left' : '+=50px'}, 240);
					}
				} else {
					if (map[foes[j].y][foes[j].x+1].terrain != 1){
						moveToon('#' + foes[j].id, map[foes[j].y][foes[j].x+=1], {'left' : '+=50px'}, 240);
					} else if (map[foes[j].y][foes[j].x+1].terrain == 1){
						foes[j].direction = "negative";
						moveToon('#' + foes[j].id, map[foes[j].y][foes[j].x-=1], {'left' : '-=50px'}, 240);
					}
				}
			}
		}
	};
	setInterval(moveFoe, 250);
});

/////////////////////////
/// MOVEMENT & DAMAGE ///
/////////////////////////
var heroPosition;
var foePosition = [];
var damaged = false;
function moveToon(selector, position, change, speed){
	$(selector).animate(change, speed);
	if (selector == "#toon"){
		heroPosition = position;
	} else if (selector.substring(0,4) == "#foe"){
			if (heroPosition.y === position.y && heroPosition.x === position.x + 50 || heroPosition.y === position.y && heroPosition.x === position.x-50 ||
			heroPosition.y === position.y + 50 &&  heroPosition.x === position.x  || heroPosition.y === position.y-50 && heroPosition.x === position.x ||
			heroPosition.y === position.y && heroPosition.x === position.x){
				foePosition.push({
					unitDesignation: selector,
					unitPosition: position
				});
			}
	};
	if (enemyIsThere(heroPosition) == true && damaged == false){
		console.log("hit");
		damaged = true;
		heroDamage--;
		if (heroDamage == 0){
			heroDamage=3;
		}
	} else {
		damaged = false;
	}
	foePosition=[];
};

function enemyIsThere(heroPosition) {
  return foePosition.some(function(el) {
    return el.unitPosition === heroPosition;
  });
}

///////////////////
/// MAP BUILDER ///
///////////////////

var level = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	     [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
	     [1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
	     [1, 0, 0, 0, 1, 3, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
	     [1, 0, 1, 0, 1, 1, 1, 2, 1, 2, 1, 1, 1, 0, 1, 0, 1],
	     [1, 0, 1, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 1],
	     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
	     [1, 0, 0, 0, 1, 3, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
	     [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
	     [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 2, 0, 0, 0, 3, 1],
	     [1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
	     [1, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
	     [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
	     [1, 0, 1, 2, 0, 2, 0, 2, 1, 0, 0, 2, 0, 0, 1, 3, 1],
	     [1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1],
	     [1, 4, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1],
	     [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];

var map = [];
var foes= [];
var playerUnit;
function populateLevel(lvl) {
	var count = 0;
	for (var y=0; y<lvl.length; y++) {
		var row = [];
		for (var x=0; x<lvl[y].length; x++) {
			if (lvl[y][x]==1){
				var wall = new terrainObj(x * 50, y * 50, "wall", count, lvl[y][x]);
				row.push(wall);
				count++;
			} else if (lvl[y][x]!=1){
				var free = new terrainObj(x * 50, y * 50, "free", count, lvl[y][x]);
				row.push(free);
				count++;
			}
			if(lvl[y][x]==2){
				var enemyUnit = new nPCObj(x, y, "foe", count, "upDown");
				foes.push(enemyUnit);
			}else if(lvl[y][x]==3){
				var enemyUnit = new nPCObj(x, y, "foe", count, "leftRight");
				foes.push(enemyUnit);
			}else if(lvl[y][x]==4){
				playerUnit = new playerObj(x, y, "toon");
				heroPosition = playerUnit;
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

function nPCObj(x, y, id, count, movement) {
	$("#container").append("<div id='" + id + count + "' class='foe'></div>");
	$("#" + id + count).css("top", 10 + (y * 50) + "px");
	$("#" + id + count).css("left", 10 + (x * 50) + "px");
	this.id = id + count;
	this.x = x;
	this.y = y;
	this.movement = movement;
	this.direction = "positive";
}

function playerObj(x, y, id) {
	$("#container").append("<div id='" + id + "' class='" + id + "'></div>");
	$("#" + id).css("top", 10 + (y * 50) + "px");
	$("#" + id).css("left", 20 + (x * 50) + "px");
	this.id = id;
	this.x = x;
	this.y = y;
}
