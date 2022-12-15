import Text from "../Text/Text";

const Hand = ({ hand }) => {
  return (
    <div style={{ display: "flex" }}>
      {hand?.map((card, idx) => {
        return (
          <Text key={idx}>
            {card.value} {card.suit}
          </Text>
        );
      })}
    </div>
  );
};

export default Hand;
