let logMixin = {
	log(value) {
		console.log(value);
	},
	alert() {
		alert(value);
	}
};

class Game {
	constructor(name) {
		this.name = name;
	}
}

Object.assign(Game.prototype, logMixin);


let game = new Game('Mario');
game.log(game);


let showMixin = {
	'__proto__': logMixin,
	show(value) {
		document.write(value)
	}
};


let game1 = new Game('Pacman');
Object.assign(Game.prototype, showMixin);
game1.log(game1);
game1.show(game1.name);