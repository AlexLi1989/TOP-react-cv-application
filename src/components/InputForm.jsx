import { useState } from "react";
import Career from "./Career";
import Education from "./Education";
import General from "./General";
import Skills from "./Skills";

export default function App({ resumeData }) {
  return (
    <main>
      <General resumeData={resumeData} />
      <Education resumeData={resumeData} />
      <Career resumeData={resumeData} />
      <Skills resumeData={resumeData} />
      <button>Submit</button>
    </main>
  );
}
