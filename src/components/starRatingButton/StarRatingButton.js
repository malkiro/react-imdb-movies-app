import React from "react";
import ReactStars from "react-rating-stars-component";

const fiveStars = {
  size: 30,
  value: 2.5,
  edit: true
};

export default function StarRatingButton() {
  return (
    <div className="App">
      <ReactStars {...fiveStars} />
    </div>
  );
}
