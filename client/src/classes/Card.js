class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get color() {
    return this.suit === "♠️" || this.suit === "♣️" ? "black" : "red";
  }
}

export default Card;
