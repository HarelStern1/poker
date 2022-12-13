import Section from "../../components/Section/Section";
import SignInForm from "../../components/SignInForm/SignInForm";
import secure from "../../assets/img/3.png";

const SignIn = () => {
  return (
    <Section padding="10vmax 14vw" justify="center">
      <div>
        <SignInForm />
      </div>
      {/* <div style={{ marginRight: "80px" }}>
        <img src={secure} height="280px" />
      </div> */}
    </Section>
  );
};

export default SignIn;
