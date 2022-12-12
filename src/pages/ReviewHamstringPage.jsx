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

export default function ReviewHamstringPage() {
  const [reviewHamstring, setReviewHamstring] = useState();

  useEffect(() => {
    fetch(//"http://localhost:4050/reviewHamstring"
    "https://motion-genie-api.web.app/reviewHamstring"
    )
      .then((res) => res.json())
      .then((data) => setReviewHamstring(data))
      .catch((err) => console.error(err));
  }, []);

  const Reviews = () => {
    return (
      <>
        <Carousel  autoplay autoplaySpeed={2000}>
          {reviewHamstring &&
           [ ...reviewHamstring].reverse().map((reviewHamstring) => (
              <div key={reviewHamstring._id}>
                <h3 style={contentStyle}>
                  {reviewHamstring.Name}: {reviewHamstring.review}
                </h3>
              </div>
            ))}
        </Carousel>
      </>
    );
  };
  return (
    <>
      <h1 className="exercise-review-page"> Hamstring program Reviews</h1>
      <Reviews />
    </>
  );
}