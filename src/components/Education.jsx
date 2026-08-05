import styles from "../styles/education.module.css";
export default function Education({ resumeData, setResumeData }) {
  const onChange = (e, id) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        education: prevData.education.map((item) => {
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
        education: prevData.education.filter((item) => item.id !== id),
      };
    });
  };
  const onAdd = () => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        education: [
          ...prevData.education,
          {
            id: crypto.randomUUID(),
            title: "",
            institution: "",
            startYear: "",
            endYear: "",
          },
        ],
      };
    });
  };
  return (
    <section className={styles.education}>
      <h2>Education</h2>
      <ul>
        {resumeData.education.map((item) => {
          return (
            <li key={item.id} className={styles.educationItem}>
              <div className={styles.educationDate}>
                <input
                  name="startYear"
                  type="month"
                  value={item.startYear}
                  onChange={(e) => onChange(e, item.id)}
                />
                <span> TO </span>
                <input
                  name="endYear"
                  type="month"
                  value={item.endYear}
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className={styles.educationInfo}>
                <input
                  name="institution"
                  type="text"
                  value={item.institution}
                  onChange={(e) => onChange(e, item.id)}
                />
                <input
                  name="title"
                  type="text"
                  value={item.title}
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
      <button className={styles.addBtn} onClick={onAdd}>
        Add Education
      </button>
    </section>
  );
}
