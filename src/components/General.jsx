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
    <section className="general-info">
      <h2>General InFormation</h2>
      <label htmlFor="firstName">First Name :</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        value={resumeData.general.firstName}
        onChange={onChange}
      />
      <label htmlFor="lastName">Last Name :</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={resumeData.general.lastName}
        onChange={onChange}
      />
      <label htmlFor="birthday">Birthday :</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        value={resumeData.general.birthday}
        onChange={onChange}
      />
      <label htmlFor="address">Address :</label>
      <input
        type="text"
        id="address"
        name="address"
        value={resumeData.general.address}
        onChange={onChange}
      />
      <label htmlFor="phone">Phone :</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={resumeData.general.phone}
        onChange={onChange}
      />
      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        name="email"
        value={resumeData.general.email}
        onChange={onChange}
      />
    </section>
  );
}
