import styles from "../styles/submitted.module.css";
export default function Submitted({ resumeData, onEdit }) {
  return (
    <div className={styles.resumeContainer}>
      <article className={styles.resumePaper}>
        <h1>CV</h1>
        <section className={styles.resumeGeneral}>
          <h2>General Information</h2>
          <div className={styles.contactGrid}>
            <p>
              Name : {resumeData.general.firstName}{" "}
              {resumeData.general.lastName}
            </p>
            <p>Birthday : {resumeData.general.birthday}</p>
            <p>Address : {resumeData.general.address}</p>
            <p>Phone : {resumeData.general.phone}</p>
            <p>Email : {resumeData.general.email}</p>
          </div>
        </section>
        <section className={styles.resumeSection}>
          <h2>Education</h2>
          <ul className={styles.resumeList}>
            {resumeData.education.map((item, index) => {
              return (
                <li className={styles.resumeItem} key={index}>
                  <p className={styles.date}>
                    {item.startYear} - {item.endYear}
                  </p>
                  <div className={styles.info}>
                    <h3>{item.institution}</h3>
                    <p className={styles.title}>{item.title}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.resumeSection}>
          <h2>Career</h2>
          <ul className={styles.resumeList}>
            {resumeData.career.map((item, index) => {
              return (
                <li className={styles.resumeItem} key={index}>
                  <p className={styles.date}>
                    {item.startYear} - {item.endYear}
                  </p>
                  <div className={styles.info}>
                    <h3>{item.company}</h3>
                    <p className={styles.title}>{item.title}</p>
                    <p className={styles.description}>{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className={styles.resumeSection}>
          <h2>Skills</h2>
          <ul className={styles.resumeList}>
            {resumeData.skills.map((item, index) => {
              return (
                <li className={styles.skillItem} key={index}>
                  <span className={styles.skillTitle}>{item.skill}</span>
                  <p className={styles.description}>{item.description}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </article>
      <button className={styles.editBtn} onClick={onEdit}>
        Edit
      </button>
    </div>
  );
}
