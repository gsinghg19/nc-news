const UserLogin = ({ username }) => {
  console.log(username);
  return (
    <h2>
      <p className="UserLogin">Logged in as: {`users.${username}`}</p>
    </h2>
  );
};

export default UserLogin;
