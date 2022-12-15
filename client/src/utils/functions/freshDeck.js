import Card from "../../classes/Card";
import { SUITS, VALUES } from "../../utils/constants";

const freshDeck = () => {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => {
      return new Card(suit, value);
    });
  });
};

export default freshDeck;
