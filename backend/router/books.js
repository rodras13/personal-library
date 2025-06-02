import { Router } from "express";
import { getAllBooks } from "../controller/booksController.js";

// Importamos el enrutador para que Express pueda diferenciar entrelos paths

const booksRouter = Router();

// La ruta base, que sirve para obtener los libros
booksRouter.get("/", getAllBooks);

export { booksRouter };