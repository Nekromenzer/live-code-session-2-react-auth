const Profile = () => {
  const loggedUserName = localStorage.getItem("firstName") || null;
  return <div>Welcome {loggedUserName}</div>;
};

export default Profile;
