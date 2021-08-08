import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import getRecipientEmail from "../../utils/getRecipientEmail";
import { auth, db } from "../Firebase/firebase";
import { ChatContainer, UserAvatar } from "./style";

const Chat = ({ id, users }) => {
  const router = useRouter();
  const [user] = useAuthState(auth);
  const recipient_email = getRecipientEmail(users, user);
  const [recipientSnapShot] = useCollection(
    db.collection("users").where("email", "==", getRecipientEmail(users, user))
  );
  const recipient = recipientSnapShot?.docs?.[0]?.data();

  const enterChat = () => {
    router.push(`/chat/${id}`);
  };
  return (
    <ChatContainer onClick={enterChat}>
      {recipient ? (
        <UserAvatar src={recipient?.photoURL} />
      ) : (
        <UserAvatar>{recipient_email[0]}</UserAvatar>
      )}

      <p>{recipient_email}</p>
    </ChatContainer>
  );
};

export default Chat;
