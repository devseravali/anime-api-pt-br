import { PrismaClient } from '../generated/prisma';
import { Request, Response } from 'express';
import animes from '../../data/animes.json';

const prisma = new PrismaClient();

export const getAllAnimes = async (req: Request, res: Response) => {
  try {
    const animes = await prisma.anime.findMany();
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar animes' });
  }
};

export const getAnimeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const anime = await prisma.anime.findUnique({
      where: { id: Number(id) },
    });

    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar anime' });
  }
};

export const getAnimeBySlug = async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;
    const anime = await prisma.anime.findFirst({
      where: { slug: String(slug) },
    });

    if (!anime) {
      return res.status(404).json({ error: 'Anime não encontrado' });
    }
    res.status(200).json(anime);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar anime' });
  }
};