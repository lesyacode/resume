import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <h1 className={styles.name}>Olesia</h1>
          <p className={styles.subtitle}>Frontend Developer & Creative Designer</p>
        </header>

        {/* About */}
        <section className={styles.section} style={{ background: 'linear-gradient(to right, #ffffff, #f8faff)' }}>
          <h2 className={styles.sectionTitle}>Om mig</h2>
          <p className={styles.listItem}>
            Bor i Göteborg och tycker om att måla. Jag är kreativ, bra på att
            analysera och älskar att lära mig nya saker.
          </p>
        </section>

        {/* Skills - Move this section up for more impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Färdigheter</h2>
          <ul className={styles.list} style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem'
          }}>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Kreativitet
            </li>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Analysförmåga
            </li>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Programmering
            </li>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Musik
            </li>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Problemlösning
            </li>
            <li className={styles.listItem} style={{ 
              background: 'rgba(99, 102, 241, 0.05)', 
              padding: '0.75rem',
              borderRadius: '6px',
              textAlign: 'center'
            }}>
              Kommunikation
            </li>
          </ul>
        </section>

        {/* Experience */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Erfarenhet</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Säljare & Butiksmedarbetare</strong>
              <br />
              <span>Olika butiker</span>
            </li>
            <li className={styles.listItem}>
              <strong>Manager inom reklam</strong>
              <br />
              <span>Reklambranschen</span>
            </li>
            <li className={styles.listItem}>
              <strong>Barista</strong>
              <br />
              <span>Café</span>
            </li>
          </ul>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Utbildning</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <strong>Universitetsstudier</strong>
              <br />
              <span>Studerat på universitet</span>
            </li>
          </ul>
        </section>

        {/* Languages */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Språk</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ryska (modersmål)</li>
            <li className={styles.listItem}>Svenska (B1)</li>
            <li className={styles.listItem}>Engelska</li>
            <li className={styles.listItem}>Kan programmera</li>
          </ul>
        </section>

        {/* Interests */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Intressen</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Måla</li>
            <li className={styles.listItem}>Spela musik</li>
            <li className={styles.listItem}>Kreativa projekt</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
