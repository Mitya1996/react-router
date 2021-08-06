import candyBg from "./mp4/candy.mp4";
import "./Candy.css";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Candy() {
  const CustomButton = withStyles((theme) => ({
    root: {
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
      fontSize: "large",
    },
  }))(Button);

  return (
    <div className="Candy">
      <div className="Candy-quote">
        "Candy is dandy, but liquor is quicker!" -Willy Wonka
      </div>
      <video className="Candy-video" autoPlay loop muted>
        <source src={candyBg} type="video/mp4" />
      </video>
      <Link to="/">
        <CustomButton variant="outlined" size="large">
          GO BACK
        </CustomButton>
      </Link>
    </div>
  );
}

export default Candy;
