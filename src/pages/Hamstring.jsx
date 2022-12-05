import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function Exercise2() {
  const [exerciseTwo, setExerciseTwo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4050/exercise")
      .then((res) => res.json())
      .then((data) => {
        const hamstring = data.filter(
          (exercise) => exercise.Injury === "HamstringStrain"
        );
        console.log(hamstring);
        setExerciseTwo(hamstring);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Hamstring Strain</h1>
      {exerciseTwo.map((exercise) => {
        return (
          <>
         
              <iframe
                width="500"
                height="315"
                src={exercise.VideoOne}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              

              <iframe
                width="500"
                height="315"
                src={exercise.VideoTwo}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
          
            <iframe
              width="500"
              height="315"
              src={exercise.VideoThree}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        );
      })}
<br />

      <Link to="/review/add">
        <Button type="primary" htmlType="button" >
          Add review
        </Button>
      </Link>
    </>
  );
}
