const PreviewResume = ({ personalInfo, education, experience }) => {
  return (
    <div className="mb-8 w-full mt-6 ml-10" id="resume-container">
      <h1>Preview Resume</h1>
      <h3>
        <b>Personal Information</b>
      </h3>
      <p>Name: {personalInfo.name}</p>
      <p>Address: {personalInfo.address}</p>
      <p>Email: {personalInfo.email}</p>
      <p>Phone: {personalInfo.phone}</p>

      <h3>
        <b>Education</b>
      </h3>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            {edu.qualification} in {edu.course} at {edu.school} (Graduation
            Year: {edu.graduationYear})
          </li>
        ))}
      </ul>

      <h3>
        <b>Work Experience</b>
      </h3>
      <ul>
        {experience.map((exp, index) => (
          <li key={index}>
            <div>
              <strong>{exp.position}</strong> at {exp.company} ({exp.workYear})
            </div>
            <p>{exp.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PreviewResume;
