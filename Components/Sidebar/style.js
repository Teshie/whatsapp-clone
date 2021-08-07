import styled from "styled-components";
import { Avatar, IconButton } from "@material-ui/core";
import { Chat } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import { Search } from "@material-ui/icons";

export const Container = styled.div``;
export const Header = styled.div`
  flex: 0.3;
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
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
export const ChatIcon = styled(Chat)``;
export const MoreVertIcon = styled(MoreVert)``;
export const ButtonIcon = styled(IconButton)``;
export const SearchIcon = styled(Search)``;
export const SidebarButton = styled(IconButton)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

export const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;
export const DivSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 20px;
  border-radius: 2px;
`;
