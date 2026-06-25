# Axis Runner 3D

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen.svg)](https://axis.runner.3d.lancvip.online)
[![Three.js](https://img.shields.io/badge/Three.js-black?logo=three.js)](https://threejs.org/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?logo=greensock&logoColor=white)](https://gsap.com/)

![Axis Runner Preview](./cp.png)

Una landing page interactiva para una zapatilla de running ficticia ("Axis Runner"). Este proyecto combina renderizado 3D en tiempo real, texturas dinámicas y animaciones vinculadas al scroll.

## 🔗 Demo en vivo
**[axis.runner.3d.lancvip.online](https://axis.runner.3d.lancvip.online)**

## ✨ Características

- **Modelo 3D Interactivo:** Renderizado en tiempo real de una zapatilla usando WebGL y Three.js.
- **Animaciones GSAP ScrollTrigger:** La zapatilla gira, escala y responde dinámicamente al scroll de la página de forma fluida. Nunca se interpone en la lectura del texto.
- **Selector de Materiales:** Cambia las texturas del modelo 3D al instante mediante botones para visualizar diferentes colorways (Midnight Blue, Desert Sand, Urban Asphalt).
- **Smooth Scrolling:** Experiencia de desplazamiento sedosa impulsada por Lenis.
- **Estética Editorial:** Diseño moderno con tipografías de alto impacto, composición minimalista y modo oscuro premium.

## 🛠️ Tecnologías

- **[Three.js](https://threejs.org/)** - Motor 3D (WebGL)
- **[GSAP (ScrollTrigger)](https://gsap.com/)** - Coreografía de animaciones
- **[Lenis](https://lenis.studiofreight.com/)** - Scroll suave nativo
- **[Vite](https://vitejs.dev/)** - Entorno de desarrollo
- **Vanilla JS & CSS3** - Lógica e interfaz

## 🚀 Instalación y Ejecución Local

Si deseas correr este proyecto en tu máquina:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Axel-the/axis-runner-3d.git
   ```

2. Ingresa al directorio:
   ```bash
   cd axis-runner-3d
   ```

3. Instala las dependencias (Node.js requerido):
   ```bash
   npm install
   ```

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

5. Abre en tu navegador el puerto que te indique la terminal (por lo general `http://localhost:5173/`).
