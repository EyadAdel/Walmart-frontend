import React from "react";
import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

export default function CustomerReview() {
  // const [Frequent_Mentions,] = useState([ "Pictures(63)",
  // "For Beginners",
  // "Video(19)",
  // "Ease Of Use(16)",
  // "Lens(14)",
  // "Wifi(13)",
  // "Appearance(9)",
  // "Settings(6)",
  // "Battery Life(8)",
  // "Quality(12)",
  // "Battery Life(8)",]);
  const [reviewList] = useState([
    {
      reviewRate: [
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
        <AiFillStar />,
      ],
      reviewTitle: "Great camera for beginners",
      reviewText:
        "Love this camera. It's lightweight, not too bulky, comes with a camera strap, and charger. The charger plugs directly into the wall, no cords. When choosing a camera setting, you can see how to use each setting on the camera screen. It's super convenient if you aren't a professional photographer, and don't know what they are for!",
    },
    {
      reviewRate: [
        <AiFillStar />,
        <AiFillStar />,
        <AiOutlineStar />,
        <AiOutlineStar />,
        <AiOutlineStar />,
      ],
      reviewTitle: "Does not come with SD card",
      reviewText: `I was so excited to receive and use this item as it is advertised that an SD card is included with the purchase. I was disappointed once I received the item as it does not come with one, and they don't validate this at the store. You can't take a picture without it therefore you need to purchase separate SD card.`,
    },
  ]);
  return (
    <div>
      <div className="d-flex justify-content-between ">
        <div>
          <h6 className="fw-bold ">Most helpful positive review</h6>
          <p>54 customers found this helpful</p>
        </div>
        <div>
          <h6 className="fw-bold ">Most helpful negative review</h6>
        </div>
      </div>
      <div className="d-flex justify-content-between pt-2">
        {reviewList.map((review) => {
          return (
            <div className="pt-3">
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title className="d-flex font_size">
                    {review.reviewRate}
                  </Card.Title>
                  <Card.Title className="d-flex pt-2">
                    {review.reviewTitle}
                  </Card.Title>
                  <Card.Text>{review.reviewText}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
      {/* {Frequent_Mentions.map((Frequent) => {
        return(<div className="d-flex align-items-center justify-content-evenly">
            <span
                    type="button"
                    className=" see_all_reviews_btn btn btn-outline-dark  border-2 border-dark rounded-pill fs-7"
                  >
                    {Frequent}
                  </span>
        </div>
      )})} */}
    </div>
  );
}
