import React from "react";
import { AlertTwoTone  } from "@ant-design/icons";
import { Button, Result, Tag } from "antd";
import { Link } from "react-router-dom";


const MessageAnkle = () => (
  <div className="message">
  <Result
    icon= {<AlertTwoTone />}
    title="Please take a moment before we start"
    subTitle="You'll need the following equipments to complete the following exercises"
    extra={
      <>
        {" "}
        <Tag>Mat</Tag> <Tag>Resistance Band</Tag><br /> <br />
        <Link to='/ankle'>
          <Button type="primary">Take me to the exercises</Button>
        </Link>
      </>
    }
    />
    </div>
);
export default MessageAnkle;