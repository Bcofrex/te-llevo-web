import React, { useEffect } from 'react';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Divider } from 'primereact/divider';
import anime from 'animejs/lib/anime.es.js';
import './App.css';

function App() {
  useEffect(() => {
    // Animación de entrada para la tarjeta
    anime({
      targets: '.card',
      opacity: [0, 1],
      translateY: [50, 0],
      duration: 1000,
      easing: 'easeOutExpo',
    });

    // Animación para el encabezado
    anime({
      targets: '.header',
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1500,
      delay: 500,
      easing: 'easeOutExpo',
    });

    // Animación de pulsación para el botón de descarga
    anime({
      targets: '.p-button',
      scale: [1, 1.05],
      duration: 1000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true,
    });
  }, []);

  return (
    <div className="app-container">
      <div className="content flex flex-column justify-content-center align-items-center">
        <div className="header">
          <h1 className="title">Te llevo App</h1>
          <p className="subtitle">A tu disposición</p>
        </div>
        <Card className="text-center p-4 shadow-2 card" title="¡Bienvenido!">
          <p className="m-0 text-700">
            Descarga nuestra aplicación para disfrutar de la mejor experiencia.
          </p>
          <Button
            label="Descargar APK"
            icon="pi pi-download"
            className="p-button-rounded p-button-lg mt-4"
            onClick={() => window.open(`${process.env.PUBLIC_URL}/Te-llevo.apk`, '_blank')}
          />
          <Divider />
          <p className="text-sm text-600">
            ¿Problemas al descargar? Inténtalo por aquí:
            <a
              href="https://github.com/becofrej/Proyecto-Uber"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              Repositorio
            </a>.
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
