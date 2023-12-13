import { useState } from "react";

const PersonalInfoForm = ({ setPersonalInfo }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPersonalInfo({ name, address, email, phone });
  };

  return (
    <form className="form-control mt-20" onSubmit={handleSubmit}>
      <h1>Personal Information</h1>
      <label htmlFor="name" className="label">
        Name:
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your full name"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="address" className="label">
        Contact Address:
      </label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your contact address"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="email" className="label">
        Email Address:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="phone" className="label">
        Contact Number:
      </label>
      <input
        type="tel"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="1234567890"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button className="btn btn-success w-80 mt-5">Save Details</button>
    </form>
  );
};

export default PersonalInfoForm;
