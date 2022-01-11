import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import UserLogin from "./UserLogin";

const Nav = () => {
  return (
    <>
      <Button variant="contained" href="/">
        Home
      </Button>
      <Button variant="contained" href="/articles/">
        Articles
      </Button>
      <Button variant="contained" href="/topics/">
        Topics
      </Button>
      <Button variant="contained" endIcon={<LoginIcon />}>
        UserLogin
      </Button>
    </>
  );
};
export default Nav;
