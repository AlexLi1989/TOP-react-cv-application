import styles from "../styles/career.module.css";
export default function Career({ resumeData, setResumeData }) {
  const onChange = (e, id) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        career: prevData.career.map((item) => {
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
        career: prevData.career.filter((item) => item.id !== id),
      };
    });
  };
  const onAdd = () => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        career: [
          ...prevData.career,
          {
            id: crypto.randomUUID(),
            title: "",
            company: "",
            startYear: "",
            endYear: "",
            description: "",
          },
        ],
      };
    });
  };
  return (
    <section className={styles.career}>
      <h2>Career</h2>
      <ul className={styles.careerList}>
        {resumeData.career.map((item) => {
          return (
            <li key={item.id} className={styles.careerItem}>
              <div className={styles.careerDate}>
                <input
                  name="startYear"
                  type="month"
                  value={item.startYear}
                  onChange={(e) => onChange(e, item.id)}
                />
                <span> - </span>
                <input
                  name="endYear"
                  type="month"
                  value={item.endYear}
                  onChange={(e) => onChange(e, item.id)}
                />
              </div>
              <div className={styles.careerInfo}>
                <input
                  type="text"
                  name="company"
                  value={item.company}
                  placeholder="Company Name"
                  onChange={(e) => onChange(e, item.id)}
                />
                <input
                  type="text"
                  name="title"
                  value={item.title}
                  placeholder="Job Title"
                  onChange={(e) => onChange(e, item.id)}
                />
                <textarea
                  cols="20"
                  rows="3"
                  name="description"
                  value={item.description}
                  placeholder="Job Description"
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
        Add Career
      </button>
    </section>
  );
}
