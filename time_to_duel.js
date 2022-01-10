class Card {
  constructor(name, cost) {
    this.name = name;
    this.cost = cost;
  }
}

// unit card
class Unit extends Card {
  constructor(name, cost, power, resilience) {
    super(name, cost);
    this.power = power;
    this.resilience = resilience;
  }
  attack(target) {
    if (target instanceof Unit) {
      target.resilience -= this.power;
    } else {
      throw new Error("Target must be a unit!");
    }
  }
  showStats(){
      console.log("name: " + this.name + " power: " + this.power + " resilience " + this.resilience )
  }
}

// effect cards
class Effect extends Card {
  constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }
  play(target) {
    if (target instanceof Unit && Number.isInteger(target[this.stat])) {
    //   if (this.stat === "power"){
    //       target.power += this.magnitude;
    //   }
    //   else if(this.stat === "resilience"){
    //       target.resilience += this.magnitude
    //   }
      target[this.stat] += this.magnitude;
    } else {
      throw new Error("Target must be a unit or have that stat!");
    }
  }
}
// turn 1
const red_belt_ninja = new Unit("Red Belt Ninja", 3, 3, 4);

const hard_algorithm = new Effect("Hard Algorithm", 2, "Increase targets resilience by 3", 'resilience', 3);

hard_algorithm.play(red_belt_ninja);
console.log("turn1")
red_belt_ninja.showStats();


// turn 2
const black_belt_ninja = new Unit("Black Belt Ninja", 4, 5, 4);

const unhandled_promise_rejection = new Effect("Unhandled Promise Rejection", 1, "Reduce targets resilience by 2", 'resilience', -2);

unhandled_promise_rejection.play(red_belt_ninja);
console.log("turn2")
red_belt_ninja.showStats();
black_belt_ninja.showStats();

// turn 3
const pair_programming = new Effect("Pair progamming", 3, "Increase target's power by 2", "power", 2);

pair_programming.play(red_belt_ninja);

red_belt_ninja.attack(black_belt_ninja);

console.log("turn 3")
red_belt_ninja.showStats();
black_belt_ninja.showStats();