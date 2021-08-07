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
import * as EmailValidator from "email-validator";
const Sidebar = () => {
  const addChat = (e) => {
    e.preventDefault();
    const input = prompt(
      "Please add an email address for the user you wish to chat with"
    );
    if (!input) return null; //prevent empty input value

    //check if the input email is valid
    if (EmailValidator.validate(input)) {
      //We need to add the chat into the DB "chats" collection
    }
  };
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
      <SidebarButton onClick={addChat}>START A NEW CHAT</SidebarButton>
      {/* <ChatList></ChatList> */}
    </Container>
  );
};

export default Sidebar;
