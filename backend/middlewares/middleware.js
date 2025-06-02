import express, { response } from "express";

// Aquí vamos a ejecutar los middleware que necesitemos para la aplicación

const middleware = express();

// Lo primero que debemos configurar del Middleware es deshabilitar la marca de agua de Express

middleware.disable("x-powered-by");

// Así se configura para que pase por todos los path y tipos de consulta
middleware.use((request, response, next) => {
  console.log("Request type: ", request.method);
  console.log("Direction: ", request.path);
  const nowTime = new Date().toDateString();
  console.log("Date: ", nowTime);

  next();
});

export { middleware };