import { useState } from "react";
import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PersonalInfoForm from "./components/PersonalInfoForm";
import PreviewResume from "./components/PreviewResume";

const App = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const handlePreview = () => {
    setPreviewMode(true);
  };

  const handleEdit = () => {
    setPreviewMode(false);
  };

  const generateResumeContent = () => {
    const content = `
      Full Name: ${personalInfo.fullName}
      Email: ${personalInfo.email}
      Phone: ${personalInfo.phone}
      Address: ${personalInfo.address}
      Profile Overview: ${personalInfo.profileOverview}

      Skills: ${personalInfo.skills}

      Experiences:
      ${experience.map(
        (exp, index) => `
        Experience ${index + 1}:
          Company: ${exp.company}
          Role: ${exp.role}
          Responsibilities: ${exp.responsibilities}
          Start Year: ${exp.startYear}
          End Year: ${exp.endYear}
      `
      )}

      Education:
      ${education.map(
        (edu, index) => `
        Education ${index + 1}:
          Institution: ${edu.institution}
          Qualification: ${edu.qualification}
          Course: ${edu.course}
          Graduation Year: ${edu.graduationYear}
      `
      )}
    `;

    return content;
  };

  const handleDownload = () => {
    const content = generateResumeContent();

    // Download the resume content as a text file
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();
  };

  return (
    <>
      <Navbar />
      <div className="flex align-middle justify-around flex-wrap">
        {previewMode ? (
          <PreviewResume
            personalInfo={personalInfo}
            education={education}
            experience={experience}
          />
        ) : (
          <>
            <PersonalInfoForm setPersonalInfo={setPersonalInfo} />
            <EducationForm setEducation={setEducation} />
            <ExperienceForm setExperience={setExperience} />
          </>
        )}
        <button
          className="btn bg-success mt-7 mb-80"
          onClick={previewMode ? handleEdit : handlePreview}
        >
          {previewMode ? "Edit Resume" : "Preview Resume"}
        </button>
        {previewMode && (
          <button
            className="btn bg-success mt-7"
            type="button"
            onClick={handleDownload}
          >
            Download Resume (PDF)
          </button>
        )}
      </div>
      <Footer />
    </>
  );
};

export default App;
