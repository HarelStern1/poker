import { useRef } from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { CheckboxContainer } from "./SignUpForm.styled";
import { colors } from "../../utils/constants";
import Text from "../Text/Text";
import signUpUser from "../../utils/functions/signUpUser";

const SignUpForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const togglePasswordType = () => {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    // send user to BE
    const data = await signUpUser(user);

    localStorage.setItem("accessToken", data?.accessToken);

    if (data?.accessToken) {
      navigate("/dashboard");
    }
  };

  return (
    <Form>
      <Text size="28px" align="left" weight="700" margin="0 0 40px 0 ">
        Sign Up
      </Text>
      <Input placeholder="name" ref={nameRef} type="text" />
      <Input placeholder="email" ref={emailRef} type="email" />
      <Input placeholder="password" ref={passwordRef} type="password" />
      <CheckboxContainer>
        <input type="checkbox" onClick={togglePasswordType} />
        <p>Show password</p>
      </CheckboxContainer>
      <Button
        width="100%"
        fontSize="15px"
        backgroundColor={colors.green}
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
      <p>
        Already have an account? <Link to="/sign-in">Sign in</Link>
      </p>
    </Form>
  );
};

export default SignUpForm;
