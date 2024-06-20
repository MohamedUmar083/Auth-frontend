import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post(
        "https://auth-backend-2xfq.onrender.com/api/user/login-user",
        payload
      )
      .then((res) => {
        setMsg(res.data.Message);

        setTimeout(() => {
          navigate("/home");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
        setMsg(error.response.data.Message);
      });
  };
  return (
    <div>
      <div className="container login">
        <br />
        <h4>{msg}</h4>
        <br />
        <div className="row g-4 d-flex justify-content-center">
          <div className="col-6 ">
            <div className="card">
              <div className="card-body">
                <legend>Login</legend>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="email"
                    />
                    <label htmlFor="floatingInput">Email Address</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success">
                    Login
                  </button>
                  {"\u00A0"}
                  {"\u00A0"}
                  {"\u00A0"}
                  <Link
                    to="/forgetpassword"
                    className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    Forget Password ?
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
