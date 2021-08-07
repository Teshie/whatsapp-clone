import { Button } from "@material-ui/core";
import { auth, provider } from "../Firebase/firebase";
import { Container, Head, LoginContainer, Logo } from "./style";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <Container>
      <Head>
        <title>Hello Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" />
        <Button onClick={signIn} variant="outlined">
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;
