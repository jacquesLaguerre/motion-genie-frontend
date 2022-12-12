import { Link } from "react-router-dom";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Header({ user, setUser }) {
  const navigate = useNavigate();
  function SignOut() {
    setUser();
    navigate("/");
  }

  return (
<div className="Header">

    <div   style={{ display: "flex", justifyContent: "flex-start",  }}>
      <img src={user && user?.photoURL} alt="" className="avatar"/>
    <div className="userName"> 
        {user && user.displayName.match(/^.+\s/)[0] }</div>
      <div style={{
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        textAlign: 'end',
        alignItems: 'flex-end',
        marginLeft: '1100px'
      }}>
      <ul>
        <Link to={"/home"}>
          <Button type="primary" htmlType="button" >
            Home
          </Button>
        </Link>
        {user ? (
          <Link  style={{ textDecoration: "none" }} to={"/"}>
          <Button
            type="primary"
            danger
            htmlType="button"
            className="signup"
            onClick={SignOut}
            >
            Sign Out
          </Button>
        </Link>
        ) : (
          null
          )
        }
      </ul>
      <ul>
        
      </ul>
      </div>
    </div>
        </div>
  );
}
