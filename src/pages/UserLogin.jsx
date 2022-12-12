import Hero from "../components/Hero"
import Login from "../components/Login"



export default function UserLogin ({setUser}) {
  return (
   <div className="userLoginContainer">
   <Hero />
   <Login setUser={setUser} /> 
   </div>
  )
}