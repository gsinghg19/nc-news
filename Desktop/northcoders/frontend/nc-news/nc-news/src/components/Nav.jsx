import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

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
      <Button variant="contained" endIcon={<LoginIcon />} href="/topic/">
        Userlogin
      </Button>
    </>
  );
};
export default Nav;
