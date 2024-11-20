import React from "react";
import ReactDOM from "react-dom/client";

/* App Layout : 
- App 
 - Home 
   - Navbar 
   - Restaurants
     - FoodCard 
   - Footer
  - ?
*/

const resData = [
  {
    resId: 1,
    resName: "Pizza Hut",
    rating: 4.1,
    duration: 35,
    cuisines: ["Pizzas"],
    address: "Vijay Nagar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/38dd2056-8729-4a55-84ad-d927e6891edd_67385.jpg",
  },
  {
    resId: 2,
    resName: "Chinese Wok",
    rating: 4.4,
    duration: 45,
    cuisines: ["Chinese", "Asian"],
    address: "Treasure Island Indore",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg",
  },
  {
    resId: 3,
    resName: "KFC",
    rating: 4.4,
    duration: 15,
    cuisines: ["Burgers", "Fast Food"],
    address: "Vijay Nagar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/f2a0019c-c1f3-4fa8-8b53-b655a4e60da8_508468.JPG",
  },
  {
    resId: 4,
    resName: "The Belgian Waffle",
    rating: 4.7,
    duration: 35,
    cuisines: ["Waffle", "Desserts"],
    address: "BHAWANI COMPLEX",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
  },
  {
    resId: 5,
    resName: "Burger King",
    rating: 4.3,
    duration: 25,
    cuisines: ["Burgers", "American"],
    address: "Malhar Mall",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_806682.JPG",
  },
  {
    resId: 6,
    resName: "Domino's Pizza",
    rating: 4.3,
    duration: 25,
    cuisines: ["Pizzas", "Italian"],
    address: "Meghdoot Park Road",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/dbc3b8be-18c9-44fc-93c9-a586fb0c6c47_65329.JPG",
  },
  {
    resId: 7,
    resName: "Kwality Walls Ice Cream and More",
    rating: 4.7,
    duration: 35,
    cuisines: ["Ice Cream", "Desserts"],
    address: "Vaibhav Nagar Sector A",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/9bc9e6f0-e139-4ee0-add7-9746bcc23c65_314060.JPG",
  },
  {
    resId: 8,
    resName: "Gurukripa Restaurant - Sarwate",
    rating: 4.4,
    duration: 35,
    cuisines: ["North Indian", "Thalis"],
    address: "South Tukoganj",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/g5txnz35wlrgbskk3r8y",
  },
  {
    resId: 9,
    resName: "Karnawat Restaurant",
    rating: 4.1,
    duration: 25,
    cuisines: ["Indian", "Chinese"],
    address: "Vijay Nagar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/lzm4nx5axlknsr914rvv",
  },
  {
    resId: 10,
    resName: "Shree Gurukripa",
    rating: 4.3,
    duration: 20,
    cuisines: ["Thalis", "South Indian"],
    address: "Bypass South",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cb1h7bmdd9hsbxvlix8f",
  },
  {
    resId: 11,
    resName: "Shrinath Restaurant",
    rating: 4.2,
    duration: 25,
    cuisines: ["Chinese", "Thalis"],
    address: "Barfani Dham",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ubqbvnyhjnyrqqckrb2b",
  },
  {
    resId: 12,
    resName: "Goila Butter Chicken",
    rating: 4.3,
    duration: 25,
    cuisines: ["North Indian", "Biryani"],
    address: "Vijay Nagar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2acf0681a049dea7dac7271cf7ccc560",
  },
  {
    resId: 13,
    resName: "Nafees Restaurant",
    rating: 4.4,
    duration: 40,
    cuisines: ["Mughlai", "Biryani"],
    address: "Old Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/x7zvrb5mbg92skzncwnu",
  },
  {
    resId: 14,
    resName: "Pishori Restaurant",
    rating: 4.2,
    duration: 40,
    cuisines: ["North Indian", "Mughlai"],
    address: "Bhawar Kuan",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ntfzr5mgmt9b9f545vtl",
  },
  {
    resId: 15,
    resName: "Hotel Zakir",
    rating: 4.1,
    duration: 35,
    cuisines: ["Mughlai", "Biryani"],
    address: "Khajrana",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pmpoofo6nnvnjvqzsbjd",
  },
  {
    resId: 16,
    resName: "Gurukripa Southtukoganj (Dutt)",
    rating: 4.4,
    duration: 30,
    cuisines: ["South Indian", "Chinese"],
    address: "South Tukoganj",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ouqegserv9k0zecemddl",
  },
  {
    resId: 17,
    resName: "Apna Sweets",
    rating: 4.4,
    duration: 25,
    cuisines: ["Chinese", "Desserts"],
    address: "Vijay Nagar",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dgxgkfyf3tvpdpkg871z",
  },
  {
    resId: 18,
    resName: "Om Namkeen",
    rating: 4.8,
    duration: 30,
    cuisines: ["Snacks", "Sweets"],
    address: "New Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/obd9uwesga5zg6jpz66d",
  },
  {
    resId: 19,
    resName: "Zakir Family restaurant",
    rating: 4.3,
    duration: 30,
    cuisines: ["Mughlai"],
    address: "classNameic Purnima Estate",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/uya2owigz45a3o4kcta2",
  },
  {
    resId: 20,
    resName: "Johny Hot Dog",
    rating: 4.6,
    duration: 30,
    cuisines: ["Fast Food"],
    address: "New Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/n4inopqkfmhwkm436jij",
  },
  {
    resId: 21,
    resName: "iFoodLounge",
    rating: 4.2,
    duration: 30,
    cuisines: ["North Indian", "Thalis"],
    address: "Old Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/a5a98c016e58866ddcd0fd2d1786d696",
  },
  {
    resId: 22,
    resName: "Oye24",
    rating: 4.3,
    duration: 20,
    cuisines: ["Pizzas", "South Indian"],
    address: "Pardesipura",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/r3hc8fyoajjgkmjszx2k",
  },
  {
    resId: 23,
    resName: "Hotel Rajhans-Palasia",
    rating: 4.5,
    duration: 30,
    cuisines: ["Thalis", "Rajasthani"],
    address: "New Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vc195wpsfwlis8cxk0lx",
  },
  {
    resId: 24,
    resName: "Shree RajaRam Dhaba",
    rating: 4.4,
    duration: 20,
    cuisines: ["North Indian", "Chinese"],
    address: "Malwa Mill",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/nxc6w5pfmeinhicnqb58",
  },
  {
    resId: 25,
    resName: "Hotel Apna Avenue",
    rating: 4.4,
    duration: 25,
    cuisines: ["Chinese", "Fast Food"],
    address: "New Palasia",
    img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iqxxrnl22lasvumrgcjl",
  },
];

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterOuter">
        <div className="FooterInner">
          <div className="FooterCopyright">
            <div className="FooterLogo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="160"
                height="49"
                fill="none"
              >
                <g filter="url(#filter0_b_674_19294)">
                  <path
                    fill="#FE5005"
                    d="M69.097 35.543c-2.126 0-3.916-.456-5.376-1.368-1.459-.932-2.5-2.228-3.13-3.888l4.191-2.43c.85 1.964 2.338 2.948 4.464 2.948 1.925 0 2.885-.576 2.885-1.733 0-.648-.312-1.133-.94-1.459-.649-.384-1.8-.802-3.462-1.243-1.699-.466-3.139-1.133-4.31-2.002-1.296-1.051-1.944-2.539-1.944-4.464 0-1.925.696-3.533 2.093-4.704 1.416-1.176 3.096-1.761 5.04-1.761 1.742 0 3.278.412 4.613 1.243 1.334.811 2.39 1.992 3.158 3.552l-4.1 2.4c-.767-1.642-1.991-2.458-3.671-2.458-.71 0-1.267.154-1.67.456-.404.303-.61.687-.61 1.152 0 .504.245.96.73 1.368.527.403 1.56.83 3.095 1.277l1.973.638c.504.164 1.095.437 1.762.821.73.365 1.277.759 1.641 1.186.97 1.051 1.46 2.366 1.46 3.945 0 2.002-.73 3.605-2.184 4.796-1.46 1.152-3.36 1.732-5.708 1.732v-.004Zm23.482-7.47 2.184-8.135h4.858L94.763 35.12H90.51l-2.429-8.107-2.428 8.107H81.4l-4.858-15.182H81.4l2.184 8.136 2.366-8.136h4.253l2.366 8.136h.01Zm12.432-10.262a2.594 2.594 0 0 1-1.91.788 2.72 2.72 0 0 1-1.944-.788 2.702 2.702 0 0 1-.788-1.944c0-.748.264-1.387.788-1.91.547-.547 1.195-.82 1.944-.82.748 0 1.387.273 1.91.82.547.528.821 1.162.821 1.91 0 .75-.274 1.397-.821 1.944Zm.365 17.304h-4.555V19.933h4.555v15.182Zm13.867-13.632v-1.55h4.43v14.42c0 2.39-.777 4.19-2.337 5.404-1.536 1.234-3.432 1.853-5.679 1.853-3.441 0-5.841-1.224-7.195-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.094 0 1.934-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.908-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.051 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.589-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm24.624-8.29v-1.55h4.431v14.42c0 2.39-.778 4.19-2.338 5.404-1.536 1.234-3.432 1.853-5.678 1.853-3.442 0-5.842-1.224-7.196-3.672l3.888-2.247c.711 1.277 1.863 1.916 3.461 1.916 1.095 0 1.935-.284 2.52-.85.61-.566.912-1.368.912-2.4V32.96c-1.07 1.315-2.549 1.973-4.43 1.973-2.127 0-3.907-.749-5.343-2.246-1.416-1.498-2.126-3.322-2.126-5.468 0-2.145.71-3.955 2.126-5.433 1.416-1.517 3.197-2.275 5.343-2.275 1.881 0 3.36.657 4.43 1.972Zm-6.317 8.29c.711.648 1.589.97 2.64.97 1.052 0 1.935-.322 2.64-.97.687-.629 1.032-1.478 1.032-2.549 0-1.07-.345-1.925-1.032-2.549-.71-.648-1.588-.97-2.64-.97-1.051 0-1.934.322-2.64.97-.686.63-1.032 1.479-1.032 2.55 0 1.07.346 1.924 1.032 2.548Zm20.194-.547 2.856-9.293h4.858l-5.194 14.726c-.85 2.367-1.973 4.07-3.37 5.103-1.377 1.051-3.139 1.526-5.284 1.425v-4.252c1.051 0 1.862-.192 2.428-.576.567-.365 1.023-1.013 1.368-1.944l-6.043-14.482h5.011l3.37 9.293ZM.5 24.94C.5 14.566.5 9.382 3.298 5.845a12.87 12.87 0 0 1 2.108-2.107C8.938.939 14.127.939 24.5.939c10.373 0 15.557 0 19.094 2.799a12.87 12.87 0 0 1 2.108 2.107C48.5 9.378 48.5 14.567 48.5 24.94c0 10.373 0 15.557-2.798 19.095a12.873 12.873 0 0 1-2.108 2.107C40.062 48.94 34.873 48.94 24.5 48.94c-10.373 0-15.557 0-19.094-2.799a12.873 12.873 0 0 1-2.108-2.107C.5 40.5.5 35.312.5 24.939Z"
                  ></path>
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M26.314 19.967v-4.973a.588.588 0 0 0-.586-.586.588.588 0 0 0-.585.586v5.841c0 .332.268.596.595.596h.571c8.3 0 9.163.432 8.645 2.184-.024.086-.053.168-.082.259a.788.788 0 0 1-.014.053c-2.18 6.57-8.074 14.793-9.816 17.145a.611.611 0 0 1-.984 0c-1.051-1.42-3.624-4.992-5.971-9.043-.159-.37-.235-1.234 2.37-1.234h3.188c.178 0 .322.144.322.322v2.573c0 .307.225.59.533.614a.584.584 0 0 0 .465-.173.561.561 0 0 0 .173-.412v-3.49a.608.608 0 0 0-.605-.605h-6.442c-1.123 0-1.804-.96-2.25-1.833-1.402-2.938-2.405-5.837-2.405-8.122 0-5.851 4.665-11.117 11.107-11.117 5.736 0 10.08 4.171 10.963 9.216.005.043.038.235.043.274.23 2.477-6.23 2.193-8.947 2.208a.286.286 0 0 1-.288-.288v.005Z"
                    clipRule="evenodd"
                  ></path>
                </g>
                <defs></defs>
              </svg>
            </div>
            <div className="CopyrightClaim"> &#169; 2024 Swiggy Limited</div>
          </div>
          <div className="Company">
            <ul className="Options">
              <li className="Head">Company</li>
              <li className="Option">About Us</li>
              <li className="Option">Swiggy Corporate</li>
              <li className="Option">Careers</li>
              <li className="Option">Teams</li>
              <li className="Option">Swiggy One</li>
              <li className="Option">Swiggy Instamart</li>
              <li className="Option">Swiggy Dineout</li>
              <li className="Option">Swiggy Genie</li>
            </ul>
          </div>
          <div className="FooterSecond">
            <div className="Contact">
              <ul className="Options">
                <li className="Head">Contact us</li>
                <li className="Option">Help & Support</li>
                <li className="Option">Partner with us</li>
                <li className="Option">Ride with us</li>
              </ul>
            </div>
            <div className="Legal">
              <ul className="Options">
                <li className="Head">Legal</li>
                <li className="Option">Terms & Conditions</li>
                <li className="Option">Cookie policy</li>
                <li className="Option">Privacy policy</li>
              </ul>
            </div>
          </div>
          <div className="Availability">
            <ul className="Options">
              <li className="Head">Available in:</li>
              <li className="Option">Bangalore</li>
              <li className="Option">Gurgaon</li>
              <li className="Option">Hyderabad</li>
              <li className="Option">Delhi</li>
              <li className="Option">Mumbai</li>
              <li className="Option">Pune</li>
            </ul>
          </div>
          <div className="SwiggyLife">
            <ul className="Options">
              <li className="Head">Life at Swiggy</li>
              <li className="Option">Explore with Swiggy</li>
              <li className="Option">Swiggy News</li>
              <li className="Option">Snackables</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <Footer />
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