// import {useState, useEffect} from "react"
import { Button } from "antd";
import { useEffect, useState } from "react";

export default function Exercise1() {
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4050/exercise")
      .then((res) => res.json())
      .then((data) => {
        const acl = data.filter(
          (exercise) => exercise.Injury == "ACL"
        );
        console.log(acl);
        setExercises(acl);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h1> ACL Exercises </h1>

      {exercises.map((exercise) => {
        return (
          <>
            <iframe
              width="500"
              height="315"
              src={exercise.Video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </>
        );
      })}

      <Button type="link" htmlType="button" link>
        review
      </Button>
    </>
  );
}
