import React from "react";

const FoodCard = (props) => {
  // Destructuring :
  const { resId, resName, rating, duration, cuisines, address, img } =
    props.resData;
  return (
    <div className="Outer">
      <div className="Inner">
        <div className="FoodImg">
          <img className="FoodItem" src={props.resData.img} alt="Food Image" />
        </div>
        <div className="FoodDetails">
          <div className="ResName">{props.resData.resName}</div>
          <div className="Abc">
            <div className="Rating">{props.resData.rating} stars</div>
            <div className="Duration">{duration} minutes</div>
          </div>
          <div className="Xyz">
            <div className="Cuisines">{props.resData.cuisines.join(", ")}</div>
            <div className="Address">{address}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
