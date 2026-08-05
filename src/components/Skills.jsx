export default function Skills({ resumeData }) {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {resumeData.skills.map((item, index) => {
          return (
            <li key={index} className="skills-item">
              <div className="skills-title">
                <input type="text" value={item.skill} />
              </div>
              <div className="skills-info">
                <textarea
                  cols="20"
                  rows="3"
                  value={item.description}
                  placeholder="Description"
                />
              </div>
              <div className="btn-container">
                <button>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button>Add Skill</button>
    </section>
  );
}
