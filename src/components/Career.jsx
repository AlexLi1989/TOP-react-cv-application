export default function Career({ resumeData }) {
  return (
    <section className="career">
      <h2>Career</h2>
      <ul>
        {resumeData.career.map((item, index) => {
          return (
            <li key={index} className="career-item">
              <div className="career-date">
                <input type="month" value={item.startYear} />
                <span> - </span>
                <input type="month" value={item.endYear} />
              </div>
              <div className="career-info">
                <input
                  type="text"
                  value={item.company}
                  placeholder="Company Name"
                />
                <input type="text" value={item.title} placeholder="Job Title" />
                <textarea
                  cols="20"
                  rows="3"
                  value={item.description}
                  placeholder="Job Description"
                />
              </div>
              <div className="btn-container">
                <button>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button>Add Career</button>
    </section>
  );
}
