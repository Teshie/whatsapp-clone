import { Container, LoadingContainer, Logo } from "./style";
import { Circle } from "better-react-spinkit";
const Loading = () => {
  return (
    <Container>
      <LoadingContainer>
        <Logo
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/479px-WhatsApp.svg.png"
        />
        <Circle color="#3CBC28" size={60} />
      </LoadingContainer>
    </Container>
  );
};

export default Loading;
