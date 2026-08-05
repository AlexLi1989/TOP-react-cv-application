import { useState } from "react";
import InputForm from "./components/InputForm";
import Submitted from "./components/Submitted";
import "./app.css";
export default function App() {
  //write static page first, implement state after
  const [resumeData, setResumeData] = useState({
    general: {
      firstName: "alex",
      lastName: "li",
      birthday: "1931-02-24",
      address: "hong kong",
      phone: "12345678",
      email: "example@example.com",
    },
    education: [
      {
        id: "mock-edu-1",
        title: "BSc in Computer Science",
        institution: "University of Hong Kong",
        startYear: "2002-09",
        endYear: "2012-12",
      },
    ],
    career: [
      {
        id: "mock-career-1",
        title: "Software Engineer",
        company: "Tech Corp",
        startYear: "2012-01",
        endYear: "2015-12",
        description:
          "Developed and maintained web applications using JavaScript and React.",
      },
    ],
    skills: [
      {
        id: "mock-skill-1",
        skill: "Language skills",
        description: "English:fluent, Chinese: native speaker",
      },
    ],
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  function toggleSubmit() {
    setIsSubmitted((prev) => !prev);
  }
  return (
    <main>
      {isSubmitted ? (
        <Submitted resumeData={resumeData} onEdit={toggleSubmit} />
      ) : (
        <InputForm
          resumeData={resumeData}
          onSubmit={toggleSubmit}
          setResumeData={setResumeData}
        />
      )}
    </main>
  );
}
