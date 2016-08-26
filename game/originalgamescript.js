function moveToon(selector, change){
	selector.animate(change , 50);

}


function gameObj(x, y, id) {
	$("#container").append("<div id='" + id + "' class='obj wall'></div>");
	$("#" + id).css("top", y + "px");
	$("#" + id).css("left", x + "px");
	this.id = id;
	this.x = x;
	this.y = y;
}

var level = [[1, 1, 1, 1, 1],
						 [1, 0, 0, 0, 1],
						 [1, 0, 1, 0, 1],
						 [1, 0, 0, 0, 1],
						 [1, 1, 1, 1, 1]];

function populateLevel(lvl) {
	var count = 0;
	for (var y=0; y<lvl.length; y++) {
		for (var x=0; x<lvl[y].length; x++) {
			if (lvl[y][x]==1){
				var wall = new gameObj(x * 50, y * 50, "wall" + count);
				// console.log(wall.x);
				walls.push(wall);
				count++;
			}
		}
	}
}

$(document).ready(function(){
	populateLevel(level);
	$(document).keydown(function (e) {
			if (e.keyCode == 83){
				// moveToon($('#toon'), {'top' : '+=10px'});
				heroCollision({'top' : '+=10px'}, {'top' : '-=10px'});
				// console.log("down");
			}
			else if (e.keyCode == 87){
				heroCollision({'top' : '-=10px'}, {'top' : '+=10px'});
			}
			else if (e.keyCode == 65){
				heroCollision({'left' : '-=10px'}, {'left' : '+=10px'});
			}
			else if (e.keyCode == 68){
				heroCollision({'left' : '+=10px'}, {'left' : '-=10px'});
			}
	});

});


var walls =[];

// document.getElementById( walls[i].id).style

function heroCollision(move, bounce){
	var toon = document.getElementById( "toon" ).style;
	var hero = {
		x: toon.left.substring(0, toon.left.length-2),
		y: toon.top.substring(0, toon.top.length-2),
		width: 30,
		height: 30
	};
	moveToon($("#toon"), move);
	console.log(hero.x);
	for(i=0; i<walls.length; i++){
		if (hero.x < walls[i].x + 50 &&
		hero.x + hero.width > walls[i].x &&
		hero.y < walls[i].y + 50 &&
		hero.height + hero.y > walls[i].y) {
			// collision detected!
			console.log(walls[i].x);
			console.log(hero.x);
			console.log(hero.width);
			moveToon($("#toon"), bounce);
			return
		}
	}
};
