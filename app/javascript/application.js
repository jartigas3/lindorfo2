// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"


document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("dynamic-text");
    if (textContainer) {
      const text = "Hola, soy Sebastián Jiménez, ¿cómo te puedo ayudar?"; // Texto que se escribirá
      let index = 0;
  
      function typeEffect() {
        if (index < text.length) {
          textContainer.innerHTML += text.charAt(index); // Añade un carácter al texto
          index++;
          setTimeout(typeEffect, 30); // Ajusta la velocidad de escritura (en milisegundos)
        }
      }
  
      typeEffect(); // Inicia el efecto de escritura
    }
  });
  