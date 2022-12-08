import { useState } from "react";
import { initializeApp } from "firebase/app";
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
    <>
      <div className="Login">
        <h1>Login</h1>
        <div>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                placeholder="yourname@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button type="submit">Log in</button>
          </form>
          <br />
          <button onClick={handleGoogleLogin}>Sign in with Google </button>
        </div>
      </div>
    </>
  );
}
