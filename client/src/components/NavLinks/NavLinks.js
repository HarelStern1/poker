import { Wrapper } from "./NavLinks.styled";
import data from "./data";
import { NavLink } from "react-router-dom";
import Text from "../Text/Text";

const NavLinks = () => {
  return (
    <Wrapper>
      {data.map((link, idx) => {
        return (
          <NavLink to={link.href} key={idx}>
            <Text size="16px">{link.text}</Text>
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;
