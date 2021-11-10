import firebase from "firebase";
import "firebase/auth";

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

if (firebase.apps.length < 1) {
  firebase.initializeApp(clientCredentials);
}

export default firebase;
