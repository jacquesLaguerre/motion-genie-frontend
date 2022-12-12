import { useState, useEffect } from "react";
import { Carousel } from "antd"
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#000000",
  lineHeight: "160px",
  textAlign: "center",
  background: "#ffffff",
};

export default function ReviewAnklePage() {
  const [reviewAnkle, setReviewAnkle] = useState();

  useEffect(() => {
    fetch(//"http://localhost:4050/reviewAnkle"
    "https://motion-genie-api.web.app/reviewAnkle"
    )
      .then((res) => res.json())
      .then((data) => setReviewAnkle(data))
      .catch((err) => console.error(err));
  }, []);

  const Reviews = () => {
    return (
      <>
        <Carousel  autoplay autoplaySpeed={2000}>
          {reviewAnkle &&
           [ ...reviewAnkle].reverse().map((reviewAnkle) => (
              <div key={reviewAnkle._id}>
                <h3 style={contentStyle}>
                  {reviewAnkle.Name}: {reviewAnkle.review}
                </h3>
              </div>
            ))}
        </Carousel>
      </>
    );
  };
  return (
    <>
      <h1 className="exercise-review-page">Ankle Reviews</h1>
      <Reviews />
    </>
  );
}
