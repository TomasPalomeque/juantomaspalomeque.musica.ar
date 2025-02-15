import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

function App() {
  const [formData, setFormData] = useState({
    NAME: "",
    EMAIL: "",
    PHONE: "",
    DESCRIPTION: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzvL-JrTKWnpcsC9CozTfDO1K5s_eku7aVNo6sRXHuNKQNEya9rmmhgkzzzW0Bz5Og6/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        alert("Mensaje enviado!");
        setFormData({
          NAME: "",
          EMAIL: "",
          PHONE: "",
          DESCRIPTION: "",
        });
      } else {
        alert("No se pudo enviar el mensaje.");
      }
    } catch (error) {
      console.error("Error para enviar el mensaje:", error);
    }
  };

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

      <section id="contacto" className="section">
        <h1>Contacto</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="NAME"
            type="text"
            placeholder="Nombre"
            value={formData.NAME}
            onChange={handleChange}
            required
          />
          <input
            name="EMAIL"
            type="email"
            placeholder="Email"
            value={formData.EMAIL}
            onChange={handleChange}
            required
          />
          <input
            name="PHONE"
            type="tel"
            placeholder="Telefono"
            value={formData.PHONE}
            onChange={handleChange}
            required
          />
          <textarea
            name="DESCRIPTION"
            placeholder="Mensaje"
            value={formData.DESCRIPTION}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default App;
