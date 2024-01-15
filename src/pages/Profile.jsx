import { useNavigate } from "react-router";

const Profile = () => {
  const loggedUserName = localStorage.getItem("firstName") || null;

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <h1>Profile</h1>
      <button onClick={() => handleLogout()}>Logout</button>
      <div
        style={{
          fontSize: "30px",
          color: "tomato",
          fontWeight: "bold",
        }}
      >
        Welcome {loggedUserName}
      </div>
    </div>
  );
};

export default Profile;
