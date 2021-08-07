import React from "react";
import {
  UserAvatar,
  IconContainer,
  Container,
  Header,
  ChatIcon,
  MoreVertIcon,
  ButtonIcon,
} from "./style";
const Sidebar = () => {
  return (
    <Container>
      <Header>
        <UserAvatar />
        <IconContainer>
          <ButtonIcon>
            <ChatIcon />
          </ButtonIcon>
          <ButtonIcon>
            <MoreVertIcon />
          </ButtonIcon>
        </IconContainer>
      </Header>
    </Container>
  );
};

export default Sidebar;
