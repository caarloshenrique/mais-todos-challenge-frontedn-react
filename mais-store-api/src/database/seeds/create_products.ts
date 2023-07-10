import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("products").insert([
    {
      name: "Apple iPhone 14 128GB Estelar 6,1” 12MP iOS 5G",
      description:
        "O iPhone 14 tem o sistema de câmera dupla mais impressionante em um iPhone, para fazer fotos espetaculares em pouca e muita luz.",
      quantity: 5,
      value: 4999.0,
    },
    {
      name: "Apple Macbook Air 13,6” M2 8GB RAM - 256GB SSD Prata",
      description:
        "Com a potência do chip M2 de última geração, o novo MacBook Air combina desempenho espetacular e até 18 horas de bateria em uma estrutura de alumínio muito fina.",
      quantity: 2,
      value: 9719.1,
    },
    {
      name: "Apple Airpods (3ª geração) com Estojo de Recarga - Lightning",
      description:
        "Os AirPods (3ª geração) vêm com Áudio Espacial Personalizado com Rastreamento Dinâmico da Cabeça para você escutar o som por todos os lados.",
      quantity: 4,
      value: 1529.1,
    },
    {
      name: "Apple Watch SE 2ª geração",
      description:
        "Recursos essenciais para ajudar você a levar uma vida mais conectada, ativa, saudável e em segurança",
      quantity: 2,
      value: 2519.1,
    },
    {
      name: "Apple AirPods Max - Cinza-espacial",
      description:
        "Os AirPodsMax reimaginam completamente os fones de ouvido circum-auriculares. O driver dinâmico criado pela Apple oferece áudio imersivo de alta fidelidade.",
      quantity: 1,
      value: 3927.0,
    },
    {
      name: "PlayStation 5 825GB 1 Controle Branco Sony",
      description:
        "Para você que é fanático por jogos, jogar não tem limites! A Sony apresenta o PlayStation 5 2022 na cor branca.",
      quantity: 3,
      value: 4199.0,
    },
    {
      name: "Hogwarts Legacy PS5 Deluxe Edition Mídia Física - Warner",
      description:
        "Hogwarts Legacy PS5 Deluxe Edition Mídia Física Dublado em PortuguêsÁudio: Português Legendas: Português Edição Deluxe.",
      quantity: 8,
      value: 477,
    },
  ]);
}
