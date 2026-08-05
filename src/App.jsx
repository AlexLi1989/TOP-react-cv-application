import { useState } from "react";
import InputForm from "./components/InputForm";
import Submitted from "./components/Submitted";
export default function App() {
  //write static page first, implement state after
  // const [resumeData, setResumeData] = useState({
  //   general: { name: "", birthday: "", address: "", phone: "", email: "" },
  //   education: [],
  //   career: [],
  //   skills: [],
  // });
  // const [isSubmitted, setIsSubmitted] = useState(false);
  // function toggleSubmit() {
  //   setIsSubmitted((prev) => !prev);
  // }
  //mock data and mock variable
  const mockData = {
    general: {
      firstName: "alex",
      lastName: "li",
      birthday: "1989-07-14",
      address: "lam tin, hong kong",
      phone: "62785383",
      email: "2012alexlst@gmail.com",
    },
    education: [
      {
        title: "BSc in Computer Science",
        institution: "University of Hong Kong",
        startYear: "2008-09",
        endYear: "2012-12",
      },
    ],
    career: [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        startYear: "2012",
        endYear: "2015",
      },
    ],
    skills: [{ skill: "JavaScript", level: "Expert" }],
  };
  const isSubmitted = false;
  return (
    <main>
      {isSubmitted ? (
        <Submitted resumeData={mockData} />
      ) : (
        <InputForm resumeData={mockData} />
      )}
    </main>
  );
}
