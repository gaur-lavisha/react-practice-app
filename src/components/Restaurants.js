import React, { useState } from "react";
import FoodCard from "../common/FoodCard";
import { resData } from "../utils/dummyData.js";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState(resData);

  // Filter Restaurants with 4.0+ Ratings
  const updateRestaurantList = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.rating > 4
    );
    console.log(filteredList);
    setRestaurantList(filteredList);
    console.log(restaurantList);
  };

  return (
    <div className="Restaurants">
      <div className="Headline">
        <h2>Restaurants with online food delivery</h2>
      </div>
      <div className="Filter" onClick={updateRestaurantList}>
        <div className="RatingBox">
          <div className="Contents">
            <div className="RatingPlus">Ratings 4.0+</div>
          </div>
        </div>
      </div>
      <div className="FoodCards">
        {restaurantList.map((restaurant) => (
          <FoodCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Restaurants;
