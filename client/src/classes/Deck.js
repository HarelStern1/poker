import freshDeck from "../utils/functions/freshDeck";
import getRandom from "../utils/functions/getRandom";

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length;
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      const oldValue = this.cards[newIndex];
      this.cards[newIndex] = this.cards[i];
      this.cards[i] = oldValue;
    }
  }

  initialDeal(users) {
    const hands = [];

    if (users.length < 2 || users.length > 8) throw new Error("Error!");

    for (let i = 0; i < users.length; i++) {
      const hand = [];
      for (let j = 0; j < 2; j++) {
        const randomIndex = getRandom(this.numberOfCards);
        hand.push(this.cards[randomIndex]);
        this.cards.splice(randomIndex, 1);
      }
      hands.push({
        name: users[i].name,
        hand,
      });
    }

    return hands;
  }

  flop() {
    const flop = [];

    for (let i = 0; i < 3; i++) {
      const randomIndex = getRandom(this.numberOfCards);
      flop.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    }

    return flop;
  }

  turn() {
    const randomIndex = getRandom(this.numberOfCards);
    const turn = this.cards[randomIndex];
    this.cards.splice(randomIndex, 1);

    return turn;
  }

  river() {
    const randomIndex = getRandom(this.numberOfCards);
    const river = this.cards[randomIndex];
    this.cards.splice(randomIndex, 1);

    return river;
  }
}

export default Deck;
