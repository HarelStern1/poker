import ButtonLink from "../../components/ButtonLink/ButtonLink";
import Section from "../../components/Section/Section";
import Text from "../../components/Text/Text";
import { colors } from "../../utils/constants";
import { Figure, StyledSpan } from "./Hero.styled";
import hero from "../../assets/img/1.png";
import { motion } from "framer-motion";

const Hero = () => {
  const imgTransition = {
    type: "spring",
    mass: 0.75,
    stiffness: 100,
    delay: 0.15,
  };

  return (
    <Section backgroundImage={colors.heroGradient} justify="space-between">
      <div>
        <Text size="80px" weight="700">
          Online Poker
        </Text>
        <Text size="40px" weight="400">
          Play with your friends <StyledSpan>in real time</StyledSpan>
        </Text>
        <Text lineHeight="24px" preLine size="16px" margin="40px 0 60px">
          {`Deserunt consequat reprehenderit amet aliquip consequat quis officia.
          Dolor cupidatat culpa in officia in. Incididunt mollit ex voluptate
          enim non. Reprehenderit Lorem cillum ex quis qui cillum.`}
          Lorem.
        </Text>
        <ButtonLink round href="/sign-up" backgroundColor={colors.red}>
          Start playing now
        </ButtonLink>
      </div>
      <Figure>
        <motion.img
          initial={{ y: -800 }}
          animate={{ y: 0 }}
          transition={imgTransition}
          src={hero}
          width="300px"
          height="375px"
        />
      </Figure>
    </Section>
  );
};

export default Hero;
