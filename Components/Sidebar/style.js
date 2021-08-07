import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";

export const Container = styled.div``;
export const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
export const IconContainer = styled.div``;
export const UserAvatar = styled(Avatar)`
  margin: 10px;
`;
export const ChatIcon = styled(Chat)``;
export const MoreVertIcon = styled(MoreVert)``;
export const ButtonIcon = styled(IconButton)``;
