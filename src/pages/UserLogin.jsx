import Hero from "../components/Hero"
import Login from "../components/Login"
import SignUp from "../components/SignUp"


export default function UserLogin ({setUser}) {
  return (
   <>
   <Hero />
   <Login setUser={setUser} /> 
<SignUp />
   </>
  )
}