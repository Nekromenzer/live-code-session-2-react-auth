const Profile = () => {
  const loggedUserName = localStorage.getItem("firstName") || null;
  return (
    <div
      style={{
        fontSize: "30px",
      }}
    >
      Welcome {loggedUserName}
    </div>
  );
};

export default Profile;
