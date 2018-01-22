class HoneyMakerBee extends Bee {
  constructor(honeyPot = 0)
  {
    super("make honey");
    this.age = 10;
    this.honeyPot = honeyPot;
  }
  makeHoney(){
    this.honeyPot += 1;
  };
  giveHoney(){
    this.honeyPot -= 1;
  }
};
