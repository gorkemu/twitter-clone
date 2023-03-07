import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut as authSignOut,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential,
  reauthenticateWithPopup,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);

  const authStateChanged = async (user) => {
    if (!user) {
      setAuthUser(null);
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      username: user.displayName,
    });
  };

  const signOut = () =>
    authSignOut(auth).then(() => {
      setAuthUser(null);
    });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    signOut,
  };
}

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);

export const registerWithEmailAndPassword = async (
  email,
  password,
  username
) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, { displayName: username });
  } catch (err) {
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    alert(err.message);
  }
};

export const signUpWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  signInWithPopup(auth, provider)
    .then((result) => {
      GoogleAuthProvider.credentialFromResult(result);
    })
    .catch((error) => {
      alert(error.message);
    });
};

export const deactivateAccount = async (userProvidedPassword) => {
  let credential;
  const user = auth.currentUser;
  const provider = user.providerData[0].providerId;

  if (provider === "google.com") {
    const provider = new GoogleAuthProvider();
    const result = await reauthenticateWithPopup(auth.currentUser, provider);
    credential = GoogleAuthProvider.credentialFromResult(result);
  } else {
    credential = EmailAuthProvider.credential(
      auth.currentUser.email,
      userProvidedPassword
    );
  }
  await reauthenticateWithCredential(auth.currentUser, credential);
  deleteUser(auth.currentUser);
};
