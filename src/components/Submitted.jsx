export default function Submitted({ resumeData, onEdit }) {
  return (
    <div className="resume-container">
      <article className="resume-paper">
        <h1>CV</h1>
        <section className="resume-general">
          <h2>General Information</h2>
          <p>
            Name : {resumeData.general.firstName} {resumeData.general.lastName}
          </p>
          <p>Birthday : {resumeData.general.birthday}</p>
          <p>Address : {resumeData.general.address}</p>
          <p>Phone : {resumeData.general.phone}</p>
          <p>Email : {resumeData.general.email}</p>
        </section>
        <section className="resume-education">
          <h2>Education</h2>
          <ul>
            {resumeData.education.map((item, index) => {
              return (
                <li className="resume-education-item" key={index}>
                  <p className="date">
                    {item.startYear} - {item.endYear}
                  </p>
                  <h3>{item.institution}</h3>
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="resume-career">
          <h2>Career</h2>
          <ul>
            {resumeData.career.map((item, index) => {
              return (
                <li className="resume-career-item" key={index}>
                  <p className="date">
                    {item.startYear} - {item.endYear}
                  </p>
                  <h3>{item.company}</h3>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="resume-skills">
          <h2>Skills</h2>
          <ul>
            {resumeData.skills.map((item, index) => {
              return (
                <li className="resume-skill-item" key={index}>
                  <p className="skill-title">{item.skill}</p>
                  <p>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}
