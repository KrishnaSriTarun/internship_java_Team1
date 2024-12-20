// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './NewCustomerForm.css'; // Import the CSS file

function NewCustomerForm() {
      const [formData, setFormData] = useState({
            boxId: '',
            name: '',
            area: '',
            phone: '',
            username: '',
            password: '',
      });

      const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                  ...prevData,
                  [name]: value,
            }));
      };

      const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form Data Submitted:', formData);
      };

      return (
            <div className="form-container">
                  <div className="header">
                        <h1 className="title">Mani Cable Network</h1>
                  </div>
                  <form onSubmit={handleSubmit} className="form">
                        <h2 className="form-title">New Customer Form</h2>
                        <input
                              type="text"
                              name="boxId"
                              placeholder="Box ID"
                              value={formData.boxId}
                              onChange={handleChange}
                              className="input"
                        />
                        <input
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                              className="input"
                        />
                        <select
                              name="area"
                              value={formData.area}
                              onChange={handleChange}
                              className="input"
                        >
                              <option value="">Select Area</option>
                              <option value="area1">Area 1</option>
                              <option value="area2">Area 2</option>
                              <option value="area3">Area 3</option>
                        </select>
                        <input
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="input"
                        />
                        <input
                              type="text"
                              name="username"
                              placeholder="Username"
                              value={formData.username}
                              onChange={handleChange}
                              className="input"
                        />
                        <input
                              type="password"
                              name="password"
                              placeholder="Password"
                              value={formData.password}
                              onChange={handleChange}
                              className="input"
                        />
                        <button type="submit" className="button">
                              Submit
                        </button>
                  </form>
            </div>
      );
}

export default NewCustomerForm;
