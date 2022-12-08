import { Button, Card, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hamstring() {
  const [exercise1, setExercise1] = useState([]);
  const [exercise2, setExercise2] = useState([]);
  const [exercise3, setExercise3] = useState([]);
  useEffect(() => {
    fetch(
      "http://localhost:4050/exercise"

      //"https://motion-genie-api.web.app/exercise"
    )
      .then((res) => res.json())
      .then((data) => {
        const hamstring = data.filter(
          (exercise) => exercise.Injury === "HamstringStrain"
        );
        console.log(hamstring);
        setExercise1(hamstring[0]);
        setExercise2(hamstring[1]);
        setExercise3(hamstring[2]);
      })
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (e, exerciseId, choice) => {
    fetch(`http://localhost:4050/exercise/${exerciseId}`,
    // `https://motion-genie-api.web.app/exercise/${exerciseId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ watched: e.target.checked }),
    }).then(() => {
      if (choice === 1) {
        setExercise1({ ...exercise1, watched: e.target.checked });
      } else if (choice === 2) {
        setExercise2({ ...exercise2, watched: e.target.checked });
      } else {
        setExercise3({ ...exercise3, watched: e.target.checked });
      }
    });
  };

  return (
    <>
      <h1>Hamstring Strain</h1>
      {/* {exercise2.map((exercise) => { */}

      <>
        <Card>
          <Checkbox
            checked={exercise1?.watched}
            onChange={(e) => handleChange(e, exercise1._id, 1)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={exercise1?.VideoOne ? exercise1.VideoOne : exercise1.VideoTwo}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>

        <Card>
          <Checkbox
            checked={exercise2?.watched}
            onChange={(e) => handleChange(e, exercise2._id, 2)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={
              exercise2?.VideoTwo ? exercise2.VideoTwo : exercise2.VideoThree
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>

        <Card>
          <Checkbox
            checked={exercise3?.watched}
            onChange={(e) => handleChange(e, exercise3._id, 3)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={
              exercise3?.VideoThree
                ? exercise3.VideoThree
                : exercise3.VideoThree
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>
      </>

      {/* })} */}
      <br />

      <Link to="/review/add/hamstring">
        <Button type="primary" htmlType="button">
          Add review
        </Button>
      </Link>
    </>
  );
}
