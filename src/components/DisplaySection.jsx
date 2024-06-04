import React from "react";

const DisplaySection = ({ triggerPreview }) => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title"> Nuevo </h2>
      <p className="text"> Lo que importa sale a la superficie </p>
      <span className="description">
        Te muestra alertas y Actividades en Vivo, para que no te pierdas de nada
        mientras haces de todo. Puedes controlar tu música, ver quién te está
        llamando, consultar el estado de tu vuelo y mucho más.
      </span>
      <button className="button" onClick={triggerPreview}>
        Checa qué lindo
      </button>
      <button className="back-button" onClick={handleScrollToTop}>
        Arriba
      </button>
    </div>
  );
};

export default DisplaySection;
