export default function Education({ resumeData }) {
  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        {resumeData.education.map((item, index) => {
          return (
            <li key={index} className="education-item">
              <div className="education-date">
                <input type="month" value={item.startYear} />
                <span> - </span>
                <input type="month" value={item.endYear} />
              </div>
              <div className="education-info">
                <input type="text" value={item.institution} />
                <input type="text" value={item.title} />
              </div>
              <div className="btn-container">
                <button>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button>Add Education</button>
    </section>
  );
}
