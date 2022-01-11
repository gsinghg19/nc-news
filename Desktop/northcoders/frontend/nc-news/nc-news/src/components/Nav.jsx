import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Nav = () => {
  return (
    <>
      <Button variant="contained" href="/">
        Home
      </Button>
      <Button variant="contained" href="/articles/">
        Articles
      </Button>
      <Button variant="contained" href="/topic/">
        Topics
      </Button>
      <Button variant="contained" href="/topic/">
        Topics
      </Button>
    </>
  );
};
export default Nav;
