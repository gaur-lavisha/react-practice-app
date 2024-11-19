import React from "react";
import ReactDOM from "react-dom/client";

/*
- App 
 - Home 
   - Navbar (Logo, Search, Offers, Help, Sign In, Cart)
   - Restaurants
     - FoodCard 
*/

const resData = [
  {
    resId: 1,
    resName: "Pizza Hut",
    rating: 4.1,
    duration: 35,
    cuisines: ["Pizzas"],
    address: "Vijay Nagar",
  },
  {
    resId: 2,
    resName: "Chinese Wok",
    rating: 4.4,
    duration: 45,
    cuisines: ["Chinese", "Asian"],
    address: "Treasure Island Indore",
  },
  {
    resId: 3,
    resName: "KFC",
    rating: 4.4,
    duration: 15,
    cuisines: ["Burgers", "Fast Food"],
    address: "Vijay Nagar",
  },
  {
    resId: 4,
    resName: "The Belgian Waffle",
    rating: 4.7,
    duration: 35,
    cuisines: ["Waffle", "Desserts"],
    address: "BHAWANI COMPLEX",
  },
  {
    resId: 5,
    resName: "Burger King",
    rating: 4.3,
    duration: 25,
    cuisines: ["Burgers", "American"],
    address: "Malhar Mall",
  },
  {
    resId: 6,
    resName: "Domino's Pizza",
    rating: 4.3,
    duration: 25,
    cuisines: ["Pizzas", "Italian"],
    address: "Meghdoot Park Road",
  },
  {
    resId: 7,
    resName: "Kwality Walls Ice Cream and More",
    rating: 4.7,
    duration: 35,
    cuisines: ["Ice Cream", "Desserts"],
    address: "Vaibhav Nagar Sector A",
  },
  {
    resId: 8,
    resName: "Gurukripa Restaurant - Sarwate",
    rating: 4.4,
    duration: 35,
    cuisines: ["North Indian", "Thalis"],
    address: "South Tukoganj",
  },
  {
    resId: 9,
    resName: "Karnawat Restaurant",
    rating: 4.1,
    duration: 25,
    cuisines: ["Indian", "Chinese"],
    address: "Vijay Nagar",
  },
  {
    resId: 10,
    resName: "Shree Gurukripa",
    rating: 4.3,
    duration: 20,
    cuisines: ["Thalis", "South Indian"],
    address: "Bypass South",
  },
  {
    resId: 11,
    resName: "Shrinath Restaurant",
    rating: 4.2,
    duration: 25,
    cuisines: ["Chinese", "Thalis"],
    address: "Barfani Dham",
  },
  {
    resId: 12,
    resName: "Goila Butter Chicken",
    rating: 4.3,
    duration: 25,
    cuisines: ["North Indian", "Biryani"],
    address: "Vijay Nagar",
  },
  {
    resId: 13,
    resName: "Nafees Restaurant",
    rating: 4.4,
    duration: 40,
    cuisines: ["Mughlai", "Biryani"],
    address: "Old Palasia",
  },
  {
    resId: 14,
    resName: "Pishori Restaurant",
    rating: 4.2,
    duration: 40,
    cuisines: ["North Indian", "Mughlai"],
    address: "Bhawar Kuan",
  },
  {
    resId: 15,
    resName: "Hotel Zakir",
    rating: 4.1,
    duration: 35,
    cuisines: ["Mughlai", "Biryani"],
    address: "Khajrana",
  },
  {
    resId: 16,
    resName: "Gurukripa Southtukoganj (Dutt)",
    rating: 4.4,
    duration: 30,
    cuisines: ["South Indian", "Chinese"],
    address: "South Tukoganj",
  },
  {
    resId: 17,
    resName: "Apna Sweets",
    rating: 4.4,
    duration: 25,
    cuisines: ["Chinese", "Desserts"],
    address: "Vijay Nagar",
  },
  {
    resId: 18,
    resName: "Om Namkeen",
    rating: 4.8,
    duration: 30,
    cuisines: ["Snacks", "Sweets"],
    address: "New Palasia",
  },
  {
    resId: 19,
    resName: "Zakir Family restaurant",
    rating: 4.3,
    duration: 30,
    cuisines: ["Mughlai"],
    address: "classNameic Purnima Estate",
  },
  {
    resId: 20,
    resName: "Johny Hot Dog",
    rating: 4.6,
    duration: 30,
    cuisines: ["Fast Food"],
    address: "New Palasia",
  },
  {
    resId: 21,
    resName: "iFoodLounge",
    rating: 4.2,
    duration: 30,
    cuisines: ["North Indian", "Thalis"],
    address: "Old Palasia",
  },
  {
    resId: 22,
    resName: "Oye24",
    rating: 4.3,
    duration: 20,
    cuisines: ["Pizzas", "South Indian"],
    address: "Pardesipura",
  },
  {
    resId: 23,
    resName: "Hotel Rajhans-Palasia",
    rating: 4.5,
    duration: 30,
    cuisines: ["Thalis", "Rajasthani"],
    address: "New Palasia",
  },
  {
    resId: 24,
    resName: "Shree RajaRam Dhaba",
    rating: 4.4,
    duration: 20,
    cuisines: ["North Indian", "Chinese"],
    address: "Malwa Mill",
  },
  {
    resId: 25,
    resName: "Hotel Apna Avenue",
    rating: 4.4,
    duration: 25,
    cuisines: ["Chinese", "Fast Food"],
    address: "New Palasia",
  },
];


const FoodCard = (props) => {
  // Destructuring :
  const {resId, resName, rating, duration, cuisines, address} = props.resData;
  return (
    <div className="Outer">
      <div className="Inner">
        <div className="FoodImg">
          <img
            className="FoodItem"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg"
            alt="Food Image"
          />
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

const Restaurants = () => {
  return (
    <div className="Restaurants">
      <div className="Headline">
        <h2>Restaurants with online food delivery</h2>
      </div>
      <div className="FoodCards">
        {resData.map((restaurant) => (
          <FoodCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <div>
      <svg className="VXJlj" viewBox="0 0 61 61" height="49" width="49">
        <g clipPath="url(#a)">
          <path
            fill="#FF5200"
            d="M.32 30.5c0-12.966 0-19.446 3.498-23.868a16.086 16.086 0 0 1 2.634-2.634C10.868.5 17.354.5 30.32.5s19.446 0 23.868 3.498c.978.774 1.86 1.656 2.634 2.634C60.32 11.048 60.32 17.534 60.32 30.5s0 19.446-3.498 23.868a16.086 16.086 0 0 1-2.634 2.634C49.772 60.5 43.286 60.5 30.32 60.5s-19.446 0-23.868-3.498a16.086 16.086 0 0 1-2.634-2.634C.32 49.952.32 43.466.32 30.5Z"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M32.317 24.065v-6.216a.735.735 0 0 0-.732-.732.735.735 0 0 0-.732.732v7.302c0 .414.336.744.744.744h.714c10.374 0 11.454.54 10.806 2.73-.03.108-.066.21-.102.324-.006.024-.012.048-.018.066-2.724 8.214-10.092 18.492-12.27 21.432a.764.764 0 0 1-1.23 0c-1.314-1.776-4.53-6.24-7.464-11.304-.198-.462-.294-1.542 2.964-1.542h3.984c.222 0 .402.18.402.402v3.216c0 .384.282.738.666.768a.73.73 0 0 0 .582-.216.701.701 0 0 0 .216-.516v-4.362a.76.76 0 0 0-.756-.756h-8.052c-1.404 0-2.256-1.2-2.814-2.292-1.752-3.672-3.006-7.296-3.006-10.152 0-7.314 5.832-13.896 13.884-13.896 7.17 0 12.6 5.214 13.704 11.52.006.054.048.294.054.342.288 3.096-7.788 2.742-11.184 2.76a.357.357 0 0 1-.36-.36v.006Z"
            clipRule="evenodd"
          ></path>
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M.32.5h60v60h-60z"></path>
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Logo />
      </div>
      <div className="NavOptions">
        <ul className="NavItems">
          <li className="Item">Swiggy Corporate</li>
          <li className="Item">Search</li>
          <li className="Item">Offers</li>
          <li className="Item">Help</li>
          <li className="Item">Sign In</li>
          <li className="Item">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Restaurants />
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
