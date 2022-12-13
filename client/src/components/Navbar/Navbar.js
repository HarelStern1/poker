import React from "react";
import { LogoWrapper, Wrapper } from "./Navbar.styled";
import { ImSpades } from "react-icons/im";
import { colors } from "../../utils/constants";
import Text from "../Text/Text";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks";

const Navbar = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to="/">
          <Text size="19px">
            <ImSpades color={colors.red} size={16} /> Online Poker
          </Text>
        </Link>
      </LogoWrapper>
      <NavLinks></NavLinks>
    </Wrapper>
  );
};

export default Navbar;
