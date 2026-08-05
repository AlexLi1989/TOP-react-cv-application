export default function Skills({ resumeData, setResumeData }) {
  const onChange = (e, id) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        skills: prevData.skills.map((item) => {
          if (item.id === id) {
            return { ...item, [e.target.name]: e.target.value };
          }
          return item;
        }),
      };
    });
  };
  const onRemove = (id) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        skills: prevData.skills.filter((item) => item.id !== id),
      };
    });
  };
  const onAdd = () => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        skills: [
          ...prevData.skills,
          {
            id: crypto.randomUUID(),
            skill: "",
            description: "",
          },
        ],
      };
    });
  };
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {resumeData.skills.map((item) => {
          return (
            <li key={item.id} className="skills-item">
              <div className="skills-title">
                <input
                  type="text"
                  name="skill"
                  value={item.skill}
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className="skills-info">
                <textarea
                  cols="20"
                  rows="3"
                  name="description"
                  value={item.description}
                  placeholder="Description"
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className="btn-container">
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={onAdd}>Add Skill</button>
    </section>
  );
}
