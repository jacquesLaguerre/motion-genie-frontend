// import {useState, useEffect} from "react"
import { Button, Card, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Acl() {
  const [exercisesUn, setExercisesUn] = useState([]);
  const [exercisesDeux, setExercisesDeux] = useState([]);
  const [exercisesTrois, setExercisesTrois] = useState([]);

  useEffect(() => {
    fetch(
      "http://localhost:4050/exercise"
      // "https://motion-genie-api.web.app/exercise"
    )
      .then((res) => res.json())
      .then((data) => {
        const acl = data.filter((exercise) => exercise.Injury === "ACL");
        console.log(acl);
        setExercisesUn(acl[0]);
        setExercisesDeux(acl[1]);
        setExercisesTrois(acl[2]);
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
        setExercisesUn({ ...exercisesUn, watched: e.target.checked });
      } else if (choice === 2) {
        setExercisesDeux({ ...exercisesDeux, watched: e.target.checked });
      } else {
        setExercisesTrois({ ...exercisesTrois, watched: e.target.checked });
      }
    });
  };

  return (
    <>
      <h1> ACL Exercises </h1>

      <>
        <Card>
          <Checkbox
            checked={exercisesUn?.watched}
            onChange={(e) => handleChange(e, exercisesUn._id, 1)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={
              exercisesUn?.Video1
                ? exercisesUn.Video1
                : exercisesUn.Video2
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>

        <Card>
          <Checkbox
            checked={
              exercisesDeux?.watched
              
            }
            onChange={(e) => handleChange(e, exercisesDeux._id, 2)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={
              exercisesDeux?.Video2
                ? exercisesDeux.Video2
                : exercisesTrois.Video3
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>

        <Card>
          <Checkbox
            checked={exercisesTrois?.watched}
            onChange={(e) => handleChange(e, exercisesTrois._id, 3)}
          />
          Mark when complete
          <iframe
            width="500"
            height="315"
            src={
              exercisesTrois?.Video3
                ? exercisesTrois.Video3
                : exercisesTrois.Video3
            }
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Card>
      </>

      <Link to="/review/add/acl">
        <Button type="primary" htmlType="button">
          Add review
        </Button>
      </Link>
    </>
  );
}
