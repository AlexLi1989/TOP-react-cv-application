import { useState } from "react";
import Career from "./components/Career";
import Education from "./components/Education";
import General from "./components/General";
import Skills from "./components/Skills";

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
