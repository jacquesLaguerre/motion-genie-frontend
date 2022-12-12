import { useState } from "react";
import { initializeApp } from "firebase/app";
import { Button } from "antd";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyA50Lr5sDL53F4r1_T4uw8XRxMIuVNo0KU",
  authDomain: "motion-genie-fe.firebaseapp.com",
  projectId: "motion-genie-fe",
  storageBucket: "motion-genie-fe.appspot.com",
  messagingSenderId: "850918687722",
  appId: "1:850918687722:web:e47faa289573134219a893",
};

export default function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    const app = initializeApp(firebaseConfig); //connects to firebase
    const auth = getAuth(app); //connects us to firebase Auth
    const response = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ).catch(alert);
    setUser(response.user);
    navigate("/home");
  };
  const handleGoogleLogin = async () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider).catch(alert);
    setUser(response.user);
    console.log(response.user)
    navigate("/home");
  };

  return (
    <main className="mainLoginContainer">

      <div className="Login">
       <h1>Welcome to Motion Genie</h1>
       <p className="text">A post injury application that guides you through the right steps for a fast and healthy recovery </p>
          <Button type="primary"onClick={handleGoogleLogin}>Log in with Google </Button>
        </div>
    </main>
        );
}
