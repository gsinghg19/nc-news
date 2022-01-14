import { Button } from "@mui/material";

const UserLogin = ({ username }) => {
  return (
    <Button variant="contained" spacing={5} disabled={"Logged in as guest"}>
      <h2 className="UserLogin">Logged in as guest {username}</h2>
    </Button>
  );
};

export default UserLogin;
