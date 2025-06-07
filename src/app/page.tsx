import styles from "./page.module.css";

const ResumeData = {
  header: {
    name: "Olesia",
    title: "Frontend Developer & Creative Designer",
    contact: {
      email: "your.email@example.com",
      phone: "+46 XX XXX XX XX",
      location: "Göteborg, Sweden",
      linkedin: "linkedin.com/in/yourprofile"
    }
  },
  sections: {
    about: "Kreativ utvecklare med bakgrund inom design och kundservice. Kombinerar teknisk kompetens med konstnärlig vision för att skapa engagerande digitala upplevelser.",
    skills: [
      { name: "Frontend Development", level: 90 },
      { name: "UI/UX Design", level: 85 },
      { name: "Kreativitet", level: 95 },
      { name: "Problemlösning", level: 88 },
      { name: "Kommunikation", level: 90 },
      { name: "Projektledning", level: 82 }
    ],
    experience: [
      {
        title: "Manager inom reklam",
        company: "Reklambyrå AB",
        period: "2020 - 2022",
        description: "Ledde kreativa projekt och kampanjer"
      },
      {
        title: "Säljare & Butiksmedarbetare",
        company: "Retail AB",
        period: "2018 - 2020",
        description: "Kundservice och försäljning"
      },
      {
        title: "Barista",
        company: "Café Stockholm",
        period: "2017 - 2018",
        description: "Kundservice och kaffekonst"
      }
    ]
  }
};

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.name}>{ResumeData.header.name}</h1>
            <p className={styles.subtitle}>{ResumeData.header.title}</p>
            <div className={styles.contactInfo}>
              {Object.entries(ResumeData.header.contact).map(([key, value]) => (
                <span key={key} className={styles.contactItem}>
                  {value}
                </span>
              ))}
            </div>
          </div>
        </header>

        <section className={`${styles.section} ${styles.aboutSection}`}>
          <h2 className={styles.sectionTitle}>Om mig</h2>
          <p className={styles.aboutText}>{ResumeData.sections.about}</p>
        </section>

        <section className={`${styles.section} ${styles.skillsSection}`}>
          <h2 className={styles.sectionTitle}>Kompetenser</h2>
          <div className={styles.skillsGrid}>
            {ResumeData.sections.skills.map((skill) => (
              <div key={skill.name} className={styles.skillItem}>
                <span className={styles.skillName}>{skill.name}</span>
                <div className={styles.skillBar}>
                  <div 
                    className={styles.skillProgress} 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.experienceSection}`}>
          <h2 className={styles.sectionTitle}>Erfarenhet</h2>
          {ResumeData.sections.experience.map((exp, index) => (
            <div key={index} className={styles.experienceItem}>
              <h3 className={styles.experienceTitle}>{exp.title}</h3>
              <p className={styles.experienceCompany}>{exp.company}</p>
              <p className={styles.experiencePeriod}>{exp.period}</p>
              <p className={styles.experienceDescription}>{exp.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
