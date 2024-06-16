import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newpassword, setNewPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { newpassword, confirmpassword };
    try {
      const response = await axios.post(
        `http://localhost:8383/api/user/reset-password/${id}`,
        payload
      );
      if (response.status == 200) {
        setMsg(response.data.Message);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      setMsg(error.response.data.Message);
    }
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
                <legend>Reset Password</legend>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      placeholder="Enter New Password"
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">New Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="password"
                      id="conPassword"
                      name="conPassword"
                      placeholder="Confirm New Password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Confirm Password</label>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Update
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

export default ResetPassword;
