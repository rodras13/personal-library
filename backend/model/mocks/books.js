import Crypto from "node:crypto";

// Puede que esto sea una mala idea, ya que generará los códigos todo el rato

export const books =  [
    {
      "id": Crypto.randomUUID(),
      "title": "Gran Historia Visual de la Filosofía",
      "authors": [
        "Masato Tanaka",
        "Tetsuya Saito"
      ],
      "retrieved": 2024,
      "gift": "no",
      "read": "half-read",
      "genre": [
        "Divulgación",
        "Aprendizaje"
      ],
      "score": 0,
      "lend": "no",
    },
    {
      "id": Crypto.randomUUID(),
      "title": "Ejercicios de Observación",
      "authors": [
        "Nicolas Nova"
      ],
      "retrieved": 2025,
      "gift": "no",
      "read": "no",
      "genre": [
        "Divulgación",
        "Pseudo-ciencia",
        "Mentalismo"
      ],
      "score": 0,
      "lend": "no",
    },
  ];