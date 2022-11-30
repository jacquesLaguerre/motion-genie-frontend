import { Link } from "react-router-dom"
import { Button } from "antd"
export default function Header (){
  return (
    <div style={{display: 'flex', justifyContent: 'flex-end'}}>

    <ul>
    <Link to={'/sign-in'}>
    <Button type="link" htmlType="button" className="sign-in">
       Sign In
    </Button>
    </Link>
    <Link to={'/sign-up'}>
    <Button type="link" htmlType="button" className="signup">
       Sign Out
    </Button>
    </Link>
    </ul>
    </div>
  )
}