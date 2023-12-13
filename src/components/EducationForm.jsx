import React, { useState } from "react";

const EducationForm = ({ setEducation }) => {
  const [school, setSchool] = useState("");
  const [course, setCourse] = useState("");
  const [qualification, setQualification] = useState("");
  const [graduationYear, setGraduationYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setEducation((prevEducation) => [
      ...prevEducation,
      { school, course, qualification, graduationYear },
    ]);

    // Reset form fields
    setSchool("");
    setCourse("");
    setQualification("");
    setGraduationYear("");
  };

  return (
    <form className="form-control mt-20" onSubmit={handleSubmit}>
      <h1>Education</h1>
      <label htmlFor="school" className="label">
        School:
      </label>
      <input
        type="text"
        id="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="Enter your school name"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="course" className="label">
        Course of Study:
      </label>
      <input
        type="text"
        id="course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Enter your course studied"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="qualification" className="label">
        Qualification:
      </label>
      <input
        type="text"
        id="qualification"
        value={qualification}
        onChange={(e) => setQualification(e.target.value)}
        placeholder="Enter qualification obtained"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <label htmlFor="graduationYear" className="label">
        Graduation Year:
      </label>
      <input
        type="text"
        id="graduationYear"
        value={graduationYear}
        onChange={(e) => setGraduationYear(e.target.value)}
        placeholder="Enter year of graduation"
        className="input input-bordered input-success w-full max-w-xs"
      />
      <button className="btn btn-success w-80 mt-5">Add Education</button>
    </form>
  );
};

export default EducationForm;
