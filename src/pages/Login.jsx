import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import handleApiCall from "../services/HandleAPiCall";

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "kminchelle",
    password: "0lelplR",
  });
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    handleApiCall({
      data: formData,
      cb: (data, status) => {
        if (status === 200) {
          localStorage.setItem("firstName", data.firstName);
          localStorage.setItem("lastName", data.lastName);
          localStorage.setItem("email", data.email);
          localStorage.setItem("token", data.token);
          navigate("/");
        }
      },
      setLoading,
    });
  };

  //   prevent logged in user from accessing login page
  useEffect(() => {
    const loggedToken = localStorage.getItem("token") || null;
    if (loggedToken) {
      navigate("/");
    }
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Log in to view protected content!</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <div>
          <label htmlFor="userName">User Name </label>
          <input
            type="text"
            id="userName"
            name="userName"
            value={formData.userName}
            onChange={(e) => handleOnChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleOnChange(e)}
          />
        </div>

        <button
          type="submit"
          style={{
            display: "block",
            padding: "8px 20px",
            margin: "15px 0",
            fontSize: "16px",
          }}
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
