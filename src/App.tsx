import "./App.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <section id="inicio" className="section">
        <h1>Inicio</h1>
        <p>
          Welcome to the site—this top section might contain a hero image or
          introduction text, etc.
        </p>
      </section>

      <section id="bio" className="section">
        <h1>Bio</h1>
        <p>
          Biography or personal information goes here. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </section>

      <section id="discos" className="section">
        <h1>Discos</h1>
        <p>Discography, releases, etc.</p>
      </section>

      <section id="fotos" className="section">
        <h1>Fotos</h1>
        <p>Photo gallery or images.</p>
      </section>

      <section id="videos" className="section">
        <h1>Videos</h1>
        <p>Embedded videos, YouTube links, etc.</p>
      </section>

      <section id="proyectos" className="section">
        <h1>Proyectos</h1>
        <p>Projects and collaborations.</p>
      </section>

      <section id="textos" className="section">
        <h1>Textos</h1>
        <p>Written works or articles.</p>
      </section>

      <section id="novedades" className="section">
        <h1>Novedades</h1>
        <p>News, latest announcements, etc.</p>
      </section>
    </div>
  );
}

export default App;
