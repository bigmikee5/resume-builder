import React, { useState } from "react";

const ExperienceForm = ({ setExperience }) => {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [workYear, setWorkYear] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setExperience((prevExperience) => [
      ...prevExperience,
      { company, position, workYear, role },
    ]);

    // Reset form fields
    setCompany("");
    setPosition("");
    setWorkYear("");
    setRole("");
  };

  return (
    <form className="form-control mt-20" onSubmit={handleSubmit}>
      <h1>Work Experience</h1>
      <label htmlFor="company" className="label">
        Place of Work:
      </label>
      <input
        type="text"
        id="company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter your previous place of work"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="position" className="label">
        Position:
      </label>
      <input
        type="text"
        id="position"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Enter position held"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="workYear" className="label">
        Work Year:
      </label>
      <input
        type="text"
        id="workYear"
        value={workYear}
        onChange={(e) => setWorkYear(e.target.value)}
        placeholder="Enter year of work"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <textarea
        id="role"
        className="textarea textarea-success mt-4"
        placeholder="Briefly describe your role."
        value={role}
        onChange={(e) => setRole(e.target.value)}
      ></textarea>
      <button className="btn btn-success w-80 mt-5">Add Experience</button>
    </form>
  );
};

export default ExperienceForm;
