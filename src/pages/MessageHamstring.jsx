import React from "react";
import { AlertTwoTone  } from "@ant-design/icons";
import { Button, Result, Tag } from "antd";
import { Link } from "react-router-dom";


const MessageHamstring = () => (
  <div className="message">
  <Result
    icon= {<AlertTwoTone />}
    title="Please take a moment before we start"
    subTitle="You'll need the following equipments to complete the following exercises"
    extra={
      <>
        {" "}
        <Tag>Dumbell</Tag> <Tag>Exercise Ball</Tag> <Tag>Mat</Tag><br /> <br />
        <Link to='/hamstring'>
          <Button type="primary">Take me to the exercises</Button>
        </Link>
      </>
    }
    />
    </div>
);
export default MessageHamstring;