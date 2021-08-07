import { Container, Head, LoginContainer, Logo } from "./style";

const Login = () => {
  return (
    <Container>
      <Head>
        <title>Hello Login</title>
      </Head>
      <LoginContainer>
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png" />
      </LoginContainer>
    </Container>
  );
};

export default Login;
