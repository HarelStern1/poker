import { StyledText } from "./Text.styled";

const Text = ({
  children,
  size,
  color,
  weight,
  preLine,
  margin,
  lineHeight,
  align,
}) => {
  return (
    <StyledText
      size={size}
      color={color}
      weight={weight}
      preLine={preLine}
      margin={margin}
      lineHeight={lineHeight}
      align={align}
    >
      {children}
    </StyledText>
  );
};

export default Text;
