import React, { useState } from 'react';

function ComplaintBox() {
  const [complaint, setComplaint] = useState('');

  const handleComplaintChange = (event) => {
    setComplaint(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Complaint:', complaint);
    alert('Complaint submitted successfully!');
    setComplaint('');
  };

  return (
    <div>
      <h2>Complaint Box</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your complaint:
          <textarea value={complaint} onChange={handleComplaintChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ComplaintBox;
