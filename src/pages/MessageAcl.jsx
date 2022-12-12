import React from "react";
import { AlertTwoTone  } from "@ant-design/icons";
import { Button, Result, Tag } from "antd";
import { Link } from "react-router-dom";


const NotificationAcl = () => (
  <div className="message">
  <Result
    icon= {<AlertTwoTone />}
    title="Please take a moment before we start"
    subTitle="You'll need the following equipment to complete the following exercises"
    extra={
      <>
        {" "}
        <Tag>Towel</Tag>  <Tag>Mat</Tag> <br /> <br />
        <Link to='/acl'>
          <Button type="primary">Take me to the exercises</Button>
        </Link>
      </>
    }
    />
    </div>
);
export default NotificationAcl;
