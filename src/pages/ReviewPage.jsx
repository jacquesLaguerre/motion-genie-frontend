import { useState, useEffect } from "react";
import { Carousel } from "antd"
import React from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function ReviewPage() {
  const [reviews, setReviews] = useState();

  useEffect(() => {
    fetch("http://localhost:4050/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error(err));
  }, []);

  const Reviews = () => {
    return (
      <>
        <Carousel effect="fade">
          {reviews &&
            reviews.map((review) => (
              <div key={review._id}>
                <h3 style={contentStyle}>
                  {review.Name}: {review.review}
                </h3>
              </div>
            ))}
        </Carousel>
      </>
    );
  };
  return (
    <>
      <h1>Reviews</h1>
      <Reviews />
    </>
  );
}
