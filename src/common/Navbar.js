import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import Logo from "./Logo";
import { SWIGGY_CORPORATE } from "../utils/urls";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <Logo />
      </div>
      <div className="NavOptions">
        <ul className="NavItems">
          <div className="ItemContainer">
            <a className="Item" href={SWIGGY_CORPORATE} target="_blank">
              <CorporateFareOutlinedIcon style={{ color: "black" }} />
              <li className="Item">Swiggy Corporate</li>
            </a>
          </div>
          <div className="ItemContainer">
            <SearchIcon style={{ color: "black" }} />
            <li className="Item">Search</li>
          </div>
          <div className="ItemContainer">
            <LocalOfferOutlinedIcon style={{ color: "black" }} />
            <li className="Item">Offers</li>
          </div>
          <div className="ItemContainer">
            <HelpOutlineOutlinedIcon style={{ color: "black" }} />
            <li className="Item">Help</li>
          </div>
          <div className="ItemContainer">
            <PersonOutlinedIcon style={{ color: "black" }} />
            <li className="Item">Sign In</li>
          </div>
          <div className="ItemContainer">
            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
            <li className="Item">Cart</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
