import {useState} from 'react'
import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA50Lr5sDL53F4r1_T4uw8XRxMIuVNo0KU",
  authDomain: "motion-genie-fe.firebaseapp.com",
  projectId: "motion-genie-fe",
  storageBucket: "motion-genie-fe.appspot.com",
  messagingSenderId: "850918687722",
  appId: "1:850918687722:web:e47faa289573134219a893"
  };

export default function SignUp({setUser}) {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const handleSignUp= async (e)=> {
        e.preventDefault()
        const app = initializeApp(firebaseConfig) //connects to firebase 
        const auth = getAuth(app) //connects us to firebase Auth 
      const response = await createUserWithEmailAndPassword(auth, email, password)
      .catch(alert);
    setUser(response.user)
    }
    
  return (
    <>
    <div className='SignUp'>

      <h1>Signup</h1>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" 
          value={email} onChange={e=> setEmail(e.target.value)}
          placeholder="yourname@domain.com" />
        </label>
        <br />
        <label htmlFor="password">
          Password:
          <input type="password" name="password" 
          value={password} onChange={e=> setPassword(e.target.value)}/>
        </label>
        <br />
        <button type="submit">SignUp</button>
      </form>
          </div>
    </>
  );
}

