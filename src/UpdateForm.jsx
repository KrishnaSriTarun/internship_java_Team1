// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./UpdateForem.css"; // Import the CSS file

function UpdateForm() {
      const [formData, setFormData] = useState({
            cardNumber: "",
            channel: "",
            month: "",
            date: "",
            amount: "",
            discount: "",
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
            console.log("Form Submitted", formData);
            // Add your submission logic here
      };

      return (
            <div className="form-container">
                  <div className="header">
                        <h1 className="title">Mani Cable Network</h1>
                  </div>
                  <form onSubmit={handleSubmit} className="form">
                        <h2 className="form-title">Update Form</h2>
                        <input
                              type="text"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              placeholder="Card Number"
                              className="input"
                        />
                        <input
                              type="text"
                              name="channel"
                              value={formData.channel}
                              onChange={handleChange}
                              placeholder="Channel"
                              className="input"
                        />
                        <select
                              name="month"
                              value={formData.month}
                              onChange={handleChange}
                              className="input"
                        >
                              <option value="">Select Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              {/* Add more months as needed */}
                        </select>
                        <input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              className="input"
                        />
                        <input
                              type="number"
                              name="amount"
                              value={formData.amount}
                              onChange={handleChange}
                              placeholder="Amount"
                              className="input"
                        />
                        <input
                              type="number"
                              name="discount"
                              value={formData.discount}
                              onChange={handleChange}
                              placeholder="Discount"
                              className="input"
                        />
                        <button type="submit" className="button">
                              Submit
                        </button>
                  </form>
            </div>
      );
}

export default UpdateForm;
