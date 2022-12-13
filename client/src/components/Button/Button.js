import { StyledButton } from "./Buttom.styled";

const Button = ({
  children,
  color,
  backgroundColor,
  padding,
  fontSize,
  round,
  width,
  onClick,
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
      fontSize={fontSize}
      round={round}
      width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
