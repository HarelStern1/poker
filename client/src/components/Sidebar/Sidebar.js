import Text from "../Text/Text";
import { useNavigate } from "react-router-dom";
import { ImSpades } from "react-icons/im";
import { Container, Wrapper } from "./Sidebar.styled";
import { colors } from "../../utils/constants";
import Button from "../Button/Button";

const Sidebar = ({ user }) => {
  const navigate = useNavigate();

  const clearLocalStorage = () => {
    localStorage.clear();
    navigate("/sign-in");
  };

  return (
    <Wrapper>
      <div>
        <Text size="19px">
          <ImSpades color={colors.red} size={16} /> Online Poker
        </Text>
      </div>
      <Container>
        <div>
          <Text color={colors.white} size="16px">
            Ballance: 121$
          </Text>
        </div>
        <div>
          <Button
            onClick={clearLocalStorage}
            backgroundColor="transparent"
            padding="0"
            fontSize="16px"
          >
            Log out
          </Button>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Sidebar;
