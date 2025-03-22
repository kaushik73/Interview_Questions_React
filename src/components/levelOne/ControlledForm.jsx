import { useState } from "react";
import withHRAfter from "../HOC/withHRAfter";

const ControlledForm = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Form Data is  : ", formData);
  };

  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="Password"
            required
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export const WithHRControlledForm = withHRAfter(ControlledForm);
