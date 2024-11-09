"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const projects = [
  {
    title: "Página para una empresa en Wix",
    image: "/imagenes/1.png",
    link: "https://jaimesebas300.wixsite.com/compuprime",
  },
  {
    title: "Página en Blogger gratis y premium",
    image: "/imagenes/2.png",
    link: "https://autofutura7.blogspot.com/",
  },
  {
    title: "Página en Blogger para un problema en el Colegio",
    image: "/imagenes/3.png",
    link: "https://educacaviey.blogspot.com/",
  },
  {
    title: "Juego en Scratch",
    image: "/imagenes/4.png",
    link: "https://scratch.mit.edu/projects/1020599663/",
  },
  {
    title: "Juego educativo en Scratch",
    image: "/imagenes/5.png",
    link: "https://scratch.mit.edu/projects/1020599663/",
  },
  {
    title: "Juego en Scratch en 3D",
    image: "/imagenes/6.png",
    link: "https://scratch.mit.edu/projects/1048149663/",
  },
  {
    title: "La hoja de vida en HTML",
    image: "/imagenes/7.png",
    link: "https://musical-bonbon-d3ca61.netlify.app/",
  },
  {
    title: "MINI proyecto en HTML y CSS #1",
    image: "/imagenes/8.png",
    link: "https://menubasicodelbarcelona.netlify.app/",
  },
  {
    title: "El presupuesto en Next.js",
    image: "/imagenes/16.jpg",
    link: "https://serene-sable-a2a8f1.netlify.app/",
  },
  {
    title: "Las citas en Next.js",
    image: "/imagenes/15.png",
    link: "https://teal-paprenjak-48f105.netlify.app/",
  },
  {
    title: "Clon de Netflix",
    image: "/imagenes/14.png",
    link: "https://bespoke-paletas-0553b3.netlify.app/",
  },
  {
    title: "Calculadora en JavaScript",
    image: "/imagenes/13.png",
    link: "https://playful-kelpie-932f2f.netlify.app/",
  },
  {
    title: "El generador de PDF (HTML, CSS, JS)",
    image: "/imagenes/17.png",
    link: "https://merry-twilight-305ca1.netlify.app/",
  },
  {
    title: "MINI proyecto en HTML y CSS #2",
    image: "/imagenes/9.png",
    link: "https://losmejoresjugadores.netlify.app/",
  },
  {
    title: "MINI proyecto en HTML y CSS #3",
    image: "/imagenes/10.png",
    link: "https://barradenavegacio.netlify.app/",
  },
  {
    title: "MINI proyecto en HTML y CSS #4",
    image: "/imagenes/11.png",
    link: "https://transacciondebancolombia.netlify.app/",
  },
  {
    title: "MINI proyecto en HTML y CSS #5",
    image: "/imagenes/12.png",
    link: "https://cardfutbol.netlify.app/",
  },
  {
    title: "Juego en DFD",
    image: "/imagenes/18.png",
    link: "https://pdf.ac/3f29Z7",
  },
];

const Portfolio = () => {
  const [searchInput, setSearchInput] = useState("");

  const filterProjects = () => {
    return projects.filter((project) =>
      project.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };

  return (
    <div>
      <header>
        <h1>MI PORTAFOLIO</h1>
        <nav className="menu-bar">
          <a href="#sobre-mi">Sobre Mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
        </nav>
      </header>

      <section id="sobre-mi">
        <h2>Sobre Mí</h2>
        <p>Juan Sebastián Jaimes Romero</p>
        <p>10-1</p>
        <img
          src="/imagenes/yo.jpeg"
          alt="Mi foto de perfil"
          width="150"
          height="200"
        />
        <p>
          Estudiante de 10º grado apasionado por la programación de software,
          actualmente cursando estudios bajo la guía del profesor Ronald. Con
          sólidos conocimientos en lenguajes de programación como Python y
          JavaScript, y experiencia en el desarrollo de proyectos básicos de
          software. Busco oportunidades para aplicar y ampliar mis habilidades
          en un entorno profesional y continuar mi aprendizaje en el campo de la
          tecnología.
        </p>
      </section>

      <section id="experiencia">
        <h2>Experiencias como programador de software</h2>
        <ul>
          <li>Proyecto de Programación - Calculadora Básica en DFD</li>
          <li>Crear página para una empresa en Wix</li>
          <li>Proyecto de Desarrollo Web - Sitio Web Personal</li>
          <li>Crear página en Blogger gratis y premium</li>
          <li>
            Crear página en Blogger para solucionar un problema en el Colegio
          </li>
          <li>Crear página en WordPress</li>
          <li>Curso de lógica de programación</li>
          <li>Crear 5 webs en WordPress.org online</li>
          <li>Juego en Scratch</li>
          <li>Juego educativo en Scratch</li>
          <li>Utilización de diferentes tipos de IA</li>
          <li>Conocimiento básico en VSCode</li>
        </ul>
      </section>

      <section id="proyectos">
        <h2>Proyectos Realizados Durante el Año Escolar</h2>
        <input
          type="text"
          className={styles.searchInput} // Agrega esta clase
          placeholder="Buscar proyecto..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <div id="project-list">
          {filterProjects().map((project, index) => (
            <div key={index} className="proyecto">
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={`Imagen del proyecto ${project.title}`}
                  width="200"
                />
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Juan Sebastián Jaimes Romero</p>
      </footer>
    </div>
  );
};

export default Portfolio;
