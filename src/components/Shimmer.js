import React from "react";

const ShimmerFoodCard = () => {
  return <div className="ShimmerFoodCard"></div>;
};

const Shimmer = () => {
  return (
    <div className="ShimmerContainer">
      <div className="ShimmerBody">
        <div className="ShimmerFoodCards">
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
          <ShimmerFoodCard />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
