import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckboxContainer } from "./SignInForm.styled";
import Button from "../Button/Button";
import { colors } from "../../utils/constants";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Text from "../Text/Text";
import axios from "axios";

const SignInForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

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
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    // send user to BE
    const { data } = await axios.post("http://localhost:5001/sign-in", user);

    localStorage.setItem("accessToken", data?.accessToken);
  };

  return (
    <Form>
      <Text size="28px" align="left" weight="700" margin="0 0 40px 0 ">
        Sign In
      </Text>
      <Input placeholder="email" type="email" ref={emailRef} />
      <Input placeholder="password" type="password" ref={passwordRef} />
      <CheckboxContainer>
        <input type="checkbox" onClick={togglePasswordType} />
        <Text size="15px" margin="10px 0">
          Show password
        </Text>
      </CheckboxContainer>
      <Button
        width="100%"
        fontSize="15px"
        backgroundColor={colors.green}
        onClick={handleSubmit}
      >
        Sign in to Your Account
      </Button>
      <Text size="15px" margin="30px 0">
        Don't have an account? <Link to="/sign-up">Sign up</Link>
      </Text>
    </Form>
  );
};

export default SignInForm;
