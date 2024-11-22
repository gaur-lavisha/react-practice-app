import React from "react";
import StarsIcon from "@mui/icons-material/Stars";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";

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
            <div className="Star">
              <StarsIcon fontSize="small" style={{ color: "green" }} />
            </div>
            <div className="Rating">{props.resData.rating}</div>
            <div className="Star">
              <SpeedOutlinedIcon fontSize="small" style={{ color: "green" }} />
            </div>
            <div className="Duration">{duration} mins</div>
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
