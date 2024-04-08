class CoffeeMachine {
	_waterAmount = 0;

	//#manufacturer = 'Super puper electronics';

	constructor(power) {
		this._power = power;
	}

	set waterAmount(value) {
		if (value < 0) {
			this._waterAmount = 0;
		}
		this._waterAmount = value;
	}

	get waterAmount() {
		return this._waterAmount;
	}

	get power() {
		return this._power;
	}
}

let coffeeMachine = new CoffeeMachine(100);


console.log(coffeeMachine);