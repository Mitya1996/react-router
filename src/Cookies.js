import React, { useState } from "react";
import cookieImg from "./img/cookie.png";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import "./Cookies.css";

function Cookies() {
  //cookies setCookies an array of x,y coords
  const [cookies, setCookies] = useState([]);
  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setCookies((prevCookies) => [...prevCookies, { x, y }]);
  }

  const c = cookies.map((cookie, i) => (
    <img
      key={i}
      src={cookieImg}
      className="Cookies-img"
      style={{ top: `${cookie.y}px`, left: `${cookie.x}px` }}
      alt="cookie"
    />
  ));

  const CustomButton = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.6)",
      },
      fontSize: "x-large",
    },
  }))(Button);
  return (
    <div className="Cookies">
      <div className="Cookies-message">
        <h1>cookies eaten: {cookies.length}</h1>
        <CustomButton variant="outlined" onClick={handleClick}>
          nom nom nom
        </CustomButton>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </div>
      {c}
    </div>
  );
}

export default Cookies;
