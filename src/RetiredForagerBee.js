class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor()
  {
    super(false);
    this.age = 40;
    this.job = "gamble";
    this.color = "grey";
    this.gamble = super.forage;
  }
  forage()
  {
    return "I am too old, let me play cards instead";
  }
};
