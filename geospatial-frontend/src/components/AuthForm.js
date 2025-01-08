import { useState } from "react";
import API from "../utils/api";

const AuthForm = ({ type }) => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = type === "login" ? "/auth/login" : "/auth/register";
      const response = await API.post(endpoint, formData);
      if (type === "login") {
        localStorage.setItem("token", response.data.token);
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        alert("Registration successful!");
        window.location.href = "/login";
      }
    } catch (err) {
      alert(err.response?.data?.message || "An error occurred.");
    }
  };

  return (
    <form className="w-2/4 mx-auto p-6  rounded" onSubmit={handleSubmit}>
      {type === "signup" && (
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded bg-gray-800"
            required
          />
        </div>
      )}
      <div className="w-full">
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded bg-gray-800 "
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full  p-2 rounded bg-gray-800"
          required
        />
      </div>
      <button type="submit" className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded">
        {type === "login" ? "Login" : "Sign Up"}
      </button>
      </div>
    </form>
  );
};

export default AuthForm;
