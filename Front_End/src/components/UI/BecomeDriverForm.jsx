import React, { useState } from 'react';


const BecomeDriverForm = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    license: '',
    vehicle_model: '',
    vehicle_year: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
  
    try {
      // const response = await fetch('http://127.0.0.1:8000/driver/register-driver/', {
      const response = await fetch('http://172.17.7.126:8000/driver/register-driver/', {
        method: 'POST', // Ensure POST method is used
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Convert form data to JSON
      });

      // Handle if the server does not return JSON
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const responseData = await response.json();

        if (response.ok) {
          alert('Driver registration successful!');
          window.location.reload();
        } else {
          console.log('Error:', responseData);
          alert(`Error: ${JSON.stringify(responseData.errors)}`);
        }
      } else {
        // Handle non-JSON response
        const errorText = await response.text();
        console.error('Error:', errorText);
        alert('Error: Server returned non-JSON response.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Become a Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="license" className="form-label">Driver's License Number</label>
          <input
            type="text"
            className="form-control"
            id="license"
            name="license"
            value={formData.license}
            onChange={handleChange}
            placeholder="Enter your driver's license number"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vehicle_model" className="form-label">Vehicle Model</label>
          <input
            type="text"
            className="form-control"
            id="vehicle_model"
            name="vehicle_model"
            value={formData.vehicle_model}
            onChange={handleChange}
            placeholder="Enter your vehicle model"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="vehicle_year" className="form-label">Vehicle Year</label>
          <input
            type="number"
            className="form-control"
            id="vehicle_year"
            name="vehicle_year"
            value={formData.vehicle_year}
            onChange={handleChange}
            placeholder="Enter your vehicle year"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default BecomeDriverForm;
