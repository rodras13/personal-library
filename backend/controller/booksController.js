import { books } from "../model/mocks/books.js";

// Path de prueba para que no salga vacío
export const getAllBooks = (request, response) => {
  response
    .status(200)
    .send(books);
};