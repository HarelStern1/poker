import { Link } from "react-router-dom";
import Button from "../Button/Button";

const ButtonLink = ({
  href,
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
    <Link to={href}>
      <Button
        color={color}
        backgroundColor={backgroundColor}
        padding={padding}
        fontSize={fontSize}
        round={round}
        width={width}
        onClick={onClick}
      >
        {children}
      </Button>
    </Link>
  );
};

export default ButtonLink;
