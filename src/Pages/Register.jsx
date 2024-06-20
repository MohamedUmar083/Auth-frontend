import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { username, email, password };
    await axios
      .post(
        "https://auth-backend-2xfq.onrender.com/api/user/register-user",
        payload
      )
      .then((res) => setMsg(res.data.Message))
      .catch((error) => setMsg(error.data.Message));
    setTimeout(() => {
      navigate("/login");
    }, 1500);
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
                <legend>Register</legend>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="text"
                      name="username"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="username"
                      required
                    />
                    <label htmlFor="floatingInput">User Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                    <label htmlFor="floatingPassword mb-3">Email</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="text"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <br />
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
