import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
        } else {
          alert("No se pudo enviar el mensaje.");
        }
      })
      .catch(() => alert("Error al enviar el mensaje."));
  };

  return (
    <div className="app-container">
      <Navbar />
      <section id="inicio" className="section">
        <h1>Inicio</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6r_-ZWlm_eA?si=F-MflVq0GGlIb-w2"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
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

      <section id="contacto" className="section">
        <h1>Contacto</h1>
        <form
          action="https://script.google.com/macros/s/AKfycbwO0wdofwArUMij40aseTJ8vROZOg8E-EqXM54HmFUii60iXxz4qoGtS2WYITPsRtKJxA/exec"
          method="POST"
          onSubmit={handleSubmit}
        >
          <input name="NAME" type="text" placeholder="Nombre" required />
          <input name="EMAIL" type="email" placeholder="Email" required />
          <input name="PHONE" type="tel" placeholder="Telefono" required />
          <textarea
            name="DESCRIPTION"
            placeholder="Mensaje"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>

      {isSubmitted && (
        <div className="modal">
          <div className="modal-content">
            <h2>Mensaje enviado!</h2>
            <p>Tu mensaje ha sido enviado correctamente.</p>
            <button onClick={() => setIsSubmitted(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
