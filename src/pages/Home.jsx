
import { Card, Progress, Button } from "antd";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import "../assets/App.css";

const { Meta } = Card;

export default function Home() {
  const [percentOfAnkleSprainCompleted, setPercentOfAnkleSprainCompleted] =
    useState();
  const [percentOfHamstringCompleted, setPercentOfHamstringCompleted] =
    useState();
  const [percentOfAclCompleted, setPercentOfAclCompleted] = useState();

  useEffect(() => {
    fetch(
      //"http://localhost:4050/exercise"
      "https://motion-genie-api.web.app/exercise"
    )
      .then((res) => res.json())
      .then((data) => {
        const ankleData = data.filter(
          (exercise) => exercise.Injury === "AnkleFracture"
        );
        const ankleWatched = ankleData.filter(
          (exercise) => exercise?.watched === true
        );
        setPercentOfAnkleSprainCompleted(
          (100 * ankleWatched.length) / ankleData.length
        );

        const hamstringData = data.filter(
          (exercise) => exercise.Injury === "HamstringStrain"
        );
        const hamstringWatched = hamstringData.filter(
          (exercise) => exercise?.watched === true
        );
        setPercentOfHamstringCompleted(
          (100 * hamstringWatched.length) / hamstringData.length
        );

        const aclData = data.filter((exercise) => exercise.Injury === "ACL");
        const aclWatched = aclData.filter(
          (exercise) => exercise?.watched === true
        );
        setPercentOfAclCompleted((100 * aclWatched.length) / aclData.length);
      })
      .catch();
  }, []);

  return (
    <div className="home-background">
      <img src="MotionGenie.jpg" alt="" />
      <h1     className="titlemain">Motion Genie</h1>

      <h2 className="injury-type">INJURIES</h2>

      <div className="injury-cards">
        <div className="acl-card">
          <Link style={{ textDecoration: "none" }} to={"/message-acl"}>
            <Card
              hoverable
              style={{
                width: 220,
              }}
              cover={
                <img
                  alt="example"
                  src="https://www.pennmedicine.org/-/media/images/medical%20and%20research%20images/anatomy/posterior_cruciate_ligament_graphic_1.ashx"
                />
              }
            >
              <Meta title="ACL Tear" />

              <Progress
                percent={percentOfAclCompleted}
                size="small"
                showInfo={false}
              />
            </Card>
          </Link>
          <br />
          <br />

          <Link to="/review-acl">
            <Button type="primary"> Program testimonials </Button>
          </Link>
        </div>

        <br />
        <p>
          <Link style={{ textDecoration: "none" }} to={"/message-hamstring"}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://media.istockphoto.com/id/495100086/video/semitendinosus-leg-muscles-anatomy-anaimation.jpg?s=640x640&k=20&c=0EQzSw8R-za-ySbYZjcS1_y4lPzJ4WHaRfKFQk9nqOw="
                />
              }
            >
              <Meta title="Hamstring Strain" />
              <Progress
                percent={percentOfHamstringCompleted}
                size="small"
                showInfo={false}
              />
            </Card>
          </Link>
          <br />
          <br />
   
          <Link to="/review-hamstring">
            <Button type="primary"> Program testimonials </Button>
          </Link>
        </p>

        <br />
        <p>
          <Link style={{ textDecoration: "none" }} to={"/message-ankle"}>
            <Card
              hoverable
              style={{
                width: 240,
              }}
              cover={
                <img
                  alt="example"
                  src="https://sportsandspinal.net.au/wp-content/uploads/2019/03/Ankle-roll-e1553711689358.jpg"
                />
              }
            >
              <Meta title="Ankle Fracture" />
              <Progress
                percent={percentOfAnkleSprainCompleted}
                showInfo={false}
              />
            </Card>
            <br />
          <br />
   
          <Link to="/review-ankle">
            <Button type="primary"> Program testimonials </Button>
          </Link>
          </Link>
        </p>
      </div>
      <div className="general-review">
        <Link style={{ textDecoration: "none" }} to="/review/add">
          {/* <Button type="primary" htmlType="button">
            Leave us a review
          </Button> */}
          
        </Link>
      </div>
    </div>
  );
  
}
