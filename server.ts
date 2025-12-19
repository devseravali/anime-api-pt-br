import express from 'express';
import { PrismaClient } from './src/generated/prisma/client';

const app = express();
const prisma = new PrismaClient();
const port = 4000;

app.use(express.json());

app.get('/animes', async (req, res) => {
  const animes = await prisma.anime.findMany();
  res.json(animes);
  res.status(200).send('Animes buscado com sucesso');
});

app.get('/animes/busca/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res
      .status(400)
      .json({ error: 'ID inválido.' });
  }
  const anime = await prisma.anime.findUnique({
    where: { id },
  });
  res.json(anime);
});

app.get('/animes/:slug', async (req, res) => {
  const { slug } = req.params;
  const anime = await prisma.anime.findFirst({
    where: { slug },
  });
  res.json(anime);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
