# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---------------------------------------------------------------------------------------------------

# NovaLux – Tienda de Electrodomésticos:

Este proyecto es una aplicación web de e-Commerce llamado NovaLux, desarrollada para ofrecer una experiencia completa de compra online para el curso de React.
Permite visualizar productos de distintas categoría como: Pequeños Electrodomésticos, Refrigeración y Lavado, agregarlos al carrito y realizar la compra mediante un proceso de **checkout** sencillo y funcional.

---

## Características principales

**Visualización de productos:**  

  - Catálogo con distintas categorías. 

**Detalles del producto:**  
  
  - Cada producto cuenta con su imagen, descripción y precio.

**Carrito de compras:** 

  El usuario puede:
  - Agregar productos
  - Ver el total de su compra  
  - Visualizar el éxito de la compra

**Checkout:**  
  Al confirmar el pedido, se muestra un formulario de compra donde el usuario completa sus datos (nombre, email y dirección) y confirma su compra.

**Integración con Firebase - Firestore:**  

  Los datos de los productos y las órdenes se almacenan en la base de datos en tiempo real.

---

## Tecnologías utilizadas

- **React + Vite** – Framework y entorno de desarrollo rápido  
- **Firebase** – Base de datos y hosting  
- **JavaScript (ES6+)** – Lógica y componentes  
- **HTML5 / CSS3** – Estructura y estilos  
- **React Router DOM** – Navegación entre vistas  
- **Context API / useState / useEffect** – Manejo de estado global y dinámico  

---

## Funcionalidades principales

| Módulo | Descripción |
|--------|--------------|
| 🏠 Home | Muestra el listado general de productos |
| 🧭 Categorías | Filtra productos por tipo (electrodomésticos, refrigeración, lavado) |
| 🛍️ Detalle del producto | Muestra información individual del producto seleccionado |
| 🛒 Carrito | Permite visualizar y agregar productos al carrito |
| 📦 Checkout | Formulario de compra y confirmación de orden |

---