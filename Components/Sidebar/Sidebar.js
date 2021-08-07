import React from "react";
import {
  UserAvatar,
  IconContainer,
  Container,
  Header,
  ChatIcon,
  MoreVertIcon,
  ButtonIcon,
  DivSearch,
  SearchIcon,
  SearchInput,
  SidebarButton,
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
      <DivSearch>
        <SearchIcon />
        <SearchInput placeholder="Search in chats" />
      </DivSearch>
      <SidebarButton>START A NEW CHAT</SidebarButton>
      {/* <ChatList></ChatList> */}
    </Container>
  );
};

export default Sidebar;
