import styles from "../styles/skills.module.css";
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
    <section className={styles.skills}>
      <h2>Skills</h2>
      <ul className={styles.skillsList}>
        {resumeData.skills.map((item) => {
          return (
            <li key={item.id} className={styles.skillsItem}>
              <div className={styles.skillTitle}>
                <input
                  type="text"
                  name="skill"
                  value={item.skill}
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className={styles.skillInfo}>
                <textarea
                  cols="20"
                  rows="3"
                  name="description"
                  value={item.description}
                  placeholder="Description"
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className={styles.btnContainer}>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            </li>
          );
        })}
      </ul>
      <button onClick={onAdd} className={styles.addBtn}>
        Add Skill
      </button>
    </section>
  );
}
