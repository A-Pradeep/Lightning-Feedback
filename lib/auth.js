import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { createUser } from "./db";
import firebase from "./firebase";

const { createContext, useState, useEffect, useContext } = require("react");

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const UseAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const Router = useRouter();

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);
      setUser(user);
      Cookies.set("lightning-feedback-auth", true, { expires: 1 });
      return user;
    } else {
      Router.push("/");
      Cookies.remove("lightning-feedback-auth");
      setUser(false);
      return false;
    }
  };

  const formatUser = (user) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.providerData[0].photoURL,
      emailVerified: user.emailVerified,
      token: user.Aa,
    };
  };

  const signInWithGithub = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => {
        Router.push("/dashboard");
        handleUser(response.user);
      });
  };

  const signInWithGoogle = () => {
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        Router.push("/dashboard");
        handleUser(response.user);
      });
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        handleUser(false);
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      handleUser(user);
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGithub,
    signInWithGoogle,
    signOut,
  };
}
