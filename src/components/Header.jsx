import { Link } from "react-router-dom"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Header ({user, setUser}){
const navigate = useNavigate()
function SignOut (){
  setUser()
  navigate('/')
}

  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
      
      <img src={user && user?.photoURL} alt="" />
      {user && user.displayName.match(/^.+\s/)[0]}
    <ul>
    <Link to={'/home'}>
    <Button type="link" htmlType="button" className="home" >
  Home
    </Button>
    </Link>
    <Link to={'/'}>
    <Button type="link" htmlType="button" className="signup" onClick={SignOut}>
       Sign Out
    </Button>
    </Link>
    </ul>
    </div>
  )
}

