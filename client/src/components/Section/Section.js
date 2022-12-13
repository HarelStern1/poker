import { StyledSection, Content } from "./Section.styled";

const Section = ({
  children,
  padding,
  backgroundColor,
  backgroundImage,
  backgroundOpacity,
  align,
  justify,
  wrap,
  column,
  direction,
  id,
}) => {
  return (
    <StyledSection
      id={id}
      padding={padding}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundOpacity={backgroundOpacity}
    >
      <Content
        wrap={wrap}
        align={align}
        justify={justify}
        column={column}
        direction={direction}
      >
        {children}
      </Content>
    </StyledSection>
  );
};

export default Section;
