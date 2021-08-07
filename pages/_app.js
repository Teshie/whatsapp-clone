import "../styles/globals.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Components/Firebase/firebase";
import Login from "../Components/Login/Login";
import Loading from "../Components/Loading/Loading";
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth); //check if the user is already logged in to firebase

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />;
}

export default MyApp;
