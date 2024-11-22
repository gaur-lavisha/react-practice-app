import React, { useEffect, useState } from "react";
import FoodCard from "../common/FoodCard";
import { resData } from "../utils/dummyData.js";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Shimmer from "./Shimmer.js";

const Restaurants = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [check, setCheck] = useState(true);

  // Filter Restaurants with 4.0+ Ratings :
  const updateRestaurantList = () => {
    const filteredList = restaurantList.filter(
      (restaurant) => restaurant.rating > 4
    );
    setCheck(false);
    setRestaurantList(filteredList);
  };

  const resetRestaurantList = () => {
    setCheck(true);
    setRestaurantList(resData);
  };

  // useEffect() - takes a callback func and array as arguments
  // after complete render cycle, callback func inside useEffect is called
  // Reset list of restaurants after every search :
  useEffect(() => {
    setRestaurantList(resData);
    setFilteredResList(resData);
  }, []);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="Restaurants">
      <div className="Headline">
        <h2>Restaurants with online food delivery in Indore</h2>
      </div>
      <div className="Filter">
        <div className="ItemContainer">
          <div className="SearchBoxContainer">
            <div className="SearchBox">
              <input
                name="search-box"
                type="text"
                placeholder="Search for restaurant and food"
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);

                  const filterResList = restaurantList.filter((restaurant) => {
                    return restaurant.resName
                      .toLowerCase()
                      .includes(searchText.toLowerCase());
                  });

                  setFilteredResList(filterResList);
                }}
              />
              <SearchIcon
                className="SearchIcon"
                style={{ color: "rgb(132, 132, 132)" }}
              />
            </div>
          </div>
        </div>

        {check ? (
          <div className="RatingBox" onClick={updateRestaurantList}>
            <div className="Contents">
              <div className="RatingPlus">Ratings 4.0+</div>
            </div>
          </div>
        ) : (
          <div className="RatingBox" onClick={resetRestaurantList}>
            <div className="Contents">
              <div className="RatingPlus">Ratings 4.0+</div>
              <div className="UncheckRating">
                <CloseIcon fontSize="90px" />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="FoodCards">
        {searchText !== ""
          ? filteredResList.map((restaurant) => (
              <FoodCard key={restaurant.resId} resData={restaurant} />
            ))
          : restaurantList.map((restaurant) => (
              <FoodCard key={restaurant.resId} resData={restaurant} />
            ))}
      </div>
    </div>
  );
};

export default Restaurants;
