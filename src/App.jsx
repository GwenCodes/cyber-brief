import Header from './Header';

function App() {
  return (
    <div>
      <Header />

      <main style={{ paddingTop: 64, paddingLeft: 20 }}>
        <h1>Headline</h1>
        <p>Welcome to the Cyber Brief newsletter</p>
      </main>

      <section className="featureSection">
        <div className="feature-container">
          <h2 className="feature-title">Featured Briefing</h2>
          <p className="feature-text">
            Stay ahead with curated insights on cybersecurity trends, threat intelligence,
            and the latest developments shaping the digital landscape.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
