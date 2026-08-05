import styles from "../styles/general.module.css";
export default function General({ resumeData, setResumeData }) {
  const onChange = (e) => {
    setResumeData((prevData) => {
      return {
        ...prevData,
        general: { ...prevData.general, [e.target.name]: e.target.value },
      };
    });
  };
  return (
    <section className={styles.generalInfo}>
      <h2>General InFormation</h2>
      <div className={styles.formContainer}>
        <div className={styles.fieldGroup}>
          <label htmlFor="firstName">First Name :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={resumeData.general.firstName}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="lastName">Last Name :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={resumeData.general.lastName}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="birthday">Birthday :</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={resumeData.general.birthday}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="address">Address :</label>
          <input
            type="text"
            id="address"
            name="address"
            value={resumeData.general.address}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="phone">Phone :</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={resumeData.general.phone}
            onChange={onChange}
          />
        </div>
        <div className={styles.fieldGroup}>
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={resumeData.general.email}
            onChange={onChange}
          />
        </div>
      </div>
    </section>
  );
}
