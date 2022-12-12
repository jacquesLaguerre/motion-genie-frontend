import { Checkbox, Card, Button } from "antd";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Ankle() {
  const [exerciseThree, setExerciseThree] = useState([]);
  const [exerciseFour, setExerciseFour] = useState([]);
  
 
  useEffect(() => {
    fetch(
      // "http://localhost:4050/exercise"
      "https://motion-genie-api.web.app/exercise"
    )
      .then((res) => res.json())
      .then((data) => {
        const ankle = data.filter(
          (exercise) => exercise.Injury === "AnkleFracture"
        );
        console.log(ankle);

        setExerciseThree(ankle[0]);
        setExerciseFour(ankle[1]);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleChange = (e, exerciseId, choice) => {

    fetch ( //`http://localhost:4050/exercise/${exerciseId}`,
    `https://motion-genie-api.web.app/exercise/${exerciseId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },  
      body: JSON.stringify({watched: e.target.checked})
    }
    
    )
    .then(() => {
      if(choice === 3){
        setExerciseThree( { ...exerciseThree, watched: e.target.checked}) 
      } else {
        setExerciseFour( { ...exerciseThree, watched: e.target.checked})
      }
    } )// rewrite to add the watched: true attribute using setExerciseThree({...exerciseThree, watched: e.target.checked})

    // make a fetch to update exerciseId with { watch: e.target.checked }
    // return the updated exercises (in API call getAllExercises)
  }

  return (
    <>
      <h1 className="ankle-fracture">Ankle Fracture Exercises</h1>

      <>
        <Card className="exercise-page">
            <iframe
              width="500"
              height="315"
              src={
                exerciseThree?.VideoOne
                  ? exerciseThree.VideoOne
                  : exerciseThree.VideoTwo
              }
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
             />
            <br />
            <Checkbox checked={exerciseThree?.watched} onChange={(e) => handleChange(e, exerciseThree._id, 3)} />
            Mark as complete
            <br />
        

        </Card>
   

        <Card className="exercise-page">
          <iframe
            width="500"
            height="315"
            src={
              exerciseFour?.VideoOne
                ? exerciseFour.VideoOne
                : exerciseFour.VideoTwo
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
            <br />
               <Checkbox checked={exerciseFour?.watched} onChange={(e) => handleChange(e, exerciseFour._id, 4)}  />
            Mark when complete
        </Card>
<Card className="add-review">

        <Link to="/review/add/ankle">
        <Button type="primary" htmlType="button">
          Add review
        </Button>
      </Link>
</Card>
      </>

     
    </>
  );
}
