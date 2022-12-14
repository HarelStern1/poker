export const colors = {
  black: "#161616",
  white: "#eae8e4",
  red: "#D3494E",
  green: "#35654d",
  gray: "#9f9f9f",
  yellow: "#FEBF6E",
  heroGradient: "linear-gradient(to right bottom, #161616, #1b1b1b, #35654d)",
};

export const initialRooms = [
  {
    id: "1",
    name: "NLH - 1",
    users: [],
    limit: {
      minBuyIn: 4000,
      smallBlind: 10,
      bigBlind: 20,
    },
  },
  {
    id: "2",
    name: "NLH - 2",
    users: [],
    limit: {
      minBuyIn: 4000,
      smallBlind: 20,
      bigBlind: 40,
    },
  },
  {
    id: "3",
    name: "NLH - 3",
    users: [],
    limit: {
      minBuyIn: 4000,
      smallBlind: 40,
      bigBlind: 80,
    },
  },
];
