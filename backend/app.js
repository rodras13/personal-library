import express from "express";
import { middleware } from "./middlewares/middleware.js";
import { booksRouter } from "./router/books.js";

const app = express();

// Configuramos el puerto, teniendo en cuenta que puede ser variable

const port = process.env.PORT ?? 3002;

// Utilizamos el middleware
app.use(middleware);

app.use("/", booksRouter);

// Hacemos que el puerto escuche en el puerto correspondiente
app.listen(port, () => {
  console.log(`App start at http://localhost:${port}`);
});