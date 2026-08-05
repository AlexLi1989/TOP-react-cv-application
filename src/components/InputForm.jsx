import { useState } from "react";
import Career from "./Career";
import Education from "./Education";
import General from "./General";
import Skills from "./Skills";

export default function InputForm({ resumeData, onSubmit, setResumeData }) {
  return (
    <main>
      <General resumeData={resumeData} setResumeData={setResumeData} />
      <Education resumeData={resumeData} setResumeData={setResumeData} />
      <Career resumeData={resumeData} setResumeData={setResumeData} />
      <Skills resumeData={resumeData} setResumeData={setResumeData} />
      <button onClick={onSubmit}>Submit</button>
    </main>
  );
}
