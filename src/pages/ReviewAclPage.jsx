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

export default function ReviewAclPage() {
  const [reviewAcl, setReviewAcl] = useState();

  useEffect(() => {
    fetch(//"http://localhost:4050/reviewAcl"
    "https://motion-genie-api.web.app/reviewAcl"
    )
      .then((res) => res.json())
      .then((data) => setReviewAcl(data))
      .catch((err) => console.error(err));
  }, []);

  const Reviews = () => {
    return (
      <>
        <Carousel  autoplay autoplaySpeed={2000}>
          {reviewAcl &&
           [ ...reviewAcl].reverse().map((reviewAcl) => (
              <div key={reviewAcl._id}>
                <h3 style={contentStyle}>
                  {reviewAcl.Name}: {reviewAcl.review}
                </h3>
              </div>
            ))}
        </Carousel>
      </>
    );
  };
  return (
    <>
      <h1 className="exercise-review-page">Anterior Cruciate Ligament tear program Reviews</h1>
      <Reviews />
    </>
  );
}
