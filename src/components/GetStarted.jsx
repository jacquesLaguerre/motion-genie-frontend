import React, { useState } from "react";
//import { DownloadOutlined } from "@ant-design/icons";
import { Button} from "antd";


export default function GetStarted() {
  const [size, setSize] = useState("large"); // default is 'middle'

  return (
    <div style={{  display: "flex",
      justifyContent: "center", }}>
     
          <Button type="primary" size={size} className="Button" href="http://localhost:3000/main" >
           Get Started
          </Button>
       

     
    </div>
  );
}
