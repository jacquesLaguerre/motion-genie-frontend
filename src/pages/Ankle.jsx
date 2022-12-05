import { Button } from "antd";
import { useState, useEffect } from "react";

export default function Exercise3() {
  const [exerciseThree, setExerciseThree] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4050/exercise")
      .then((res) => res.json())
      .then((data) => {
        const ankle = data.filter(
          (exercise) => exercise.Injury === "AnkleFracture"
        );
        console.log(ankle);
        setExerciseThree(ankle);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1>Ankle Fracture</h1>
      {exerciseThree.map((exercise) => {
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
           <br />
         
         <iframe
           width="500"
           height="315"
           src={exercise.VideoTwo}
           title="YouTube video player"
           frameborder="0"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
           allowFullScreen
         ></iframe>


          
         
          </>
        );
      })}
<br />

     
        <Button type="link" htmlType="button" linkto>
          add review
        </Button>
   
    </>
  );
}

