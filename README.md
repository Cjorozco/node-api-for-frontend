# Node.js Básico para Frontend

Esta es una API básica construida con **Node.js** y **Express**, diseñada específicamente para practicar la integración de servicios en proyectos de Frontend. Incluye funcionalidades esenciales como autenticación mediante JWT, manejo de rutas protegidas y gestión básica de usuarios.

## Production URL
[https://node-api-for-frontend.onrender.com/](https://node-api-for-frontend.onrender.com/)

---

## Características

- 🚀 **Express**: Framework web minimalista y flexible.
- 🔐 **JWT (JSON Web Tokens)**: Implementación de autenticación segura.
- 🛡️ **Middleware**: Logs de peticiones y manejo centralizado de errores.
- 🔌 **CORS**: Configurado para permitir peticiones desde el frontend.
- 📝 **Dotenv**: Gestión de variables de entorno.

## Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone <url-del-repositorio>
   cd node-api-for-frontend
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto con la siguiente estructura:
   ```env
   PORT=3000
   JWT_SECRET=tu_secreto_super_seguro
   ```

4. **Inicia el servidor:**
   ```bash
   npm start
   ```

## API Endpoints

### Públicos
- `GET /health`: Verifica el estado de la API.
- `GET /api/users/`: Obtiene la lista de usuarios.
- `POST /api/auth/login`: Inicia sesión y devuelve un token JWT (Simulado). Requiere `email` en el body.

### Protegidos (Requiere Header `Authorization: Bearer <token>`)
- `GET /api/profile`: Devuelve la información del perfil del usuario autenticado.

---

Este proyecto es ideal para desarrolladores Frontend que deseen aprender a consumir APIs, manejar tokens de seguridad y entender el flujo básico de una aplicación backend.
