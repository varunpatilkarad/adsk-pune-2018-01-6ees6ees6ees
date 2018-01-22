class ForagerBee extends Bee {

  constructor(canFly = true)
  {
    super("find pollen");
    this.age = 10;
    this.canFly = canFly;
    this.treasureChest = [];
  }

  forage(treasure){
    this.treasureChest.push(treasure);
  };
};
