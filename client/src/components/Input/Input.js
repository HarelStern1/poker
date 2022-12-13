import { forwardRef } from "react";
import { Container, StyledInput } from "./Input.styled";

const Input = forwardRef(({ placeholder, type }, ref) => {
  return (
    <Container>
      <StyledInput placeholder={placeholder} ref={ref} type={type} />
    </Container>
  );
});

export default Input;
