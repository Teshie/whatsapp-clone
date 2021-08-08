import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  word-break: break-word;
  padding: 10px;
  :hover {
    background-color: #e9eaeb;
  }
`;
export const UserAvatar = styled(Avatar)`
  margin: 5px;
  margin-right: 15px;
`;
