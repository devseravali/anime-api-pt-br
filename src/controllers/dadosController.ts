import { Request, Response } from 'express';

export const getGeneros = async (req: Request, res: Response) => {
  try {
    const generos = {
      generos: [
        'Ação',
        'Aventura',
        'Shounen',
        'Comédia',
        'Drama',
        'Fantasia',
        'Sobrenatural',
        'Romance',
        'Ficção Científica',
        'Esporte',
        'Histórico',
        'Mistério',
        'Psicológico',
        'Thriller',
        'Horror',
        'Slice of Life',
        'Seinen',
        'Josei',
        'Mecha',
        'Magia',
        'Artes Marciais',
        'Música',
        'Mistico',
        'Ecchi',
        'Super Poderes',
        'Guerra',
        'Militar',
        'Policial',
        'Sobrenatural/Culto',
        'Paródia',
      ],
    };
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar gêneros' });
  }
};

export const getPlataformas = async (req: Request, res: Response) => {
  try {
    const plataformas = {
      plataformas: [
        'Crunchyroll',
        'Netflix',
        'Amazon Prime Video',
        'HIDIVE',
        'Disney+',
        'Globoplay',
        'Looke',
        'Pluto TV',
        'Vix',
        'SBT Videos',
        'TV Brasil Play',
        'Claro Vídeo',
        'Oi Play',
      ],
    };
    res.status(200).json(plataformas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar plataformas' });
  }
};

export const getStatus = async (req: Request, res: Response) => {
  try {
    const status = {
      status: ['Em lançamento', 'Concluído', 'Em hiato', 'Na lista para assistir', 'Cancelado'],
    };
    res.status(200).json(status);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar status' });
  }
};

export const getTags = async (req: Request, res: Response) => {
  try {
    const tags = {
      tags: [
        'Ação',
        'Aventura',
        'Shounen',
        'Suspense',
        'Fantasia',
        'Drama',
        'Comédia',
        'Romance',
        'Sci-Fi',
        'Terror',
        'Esporte',
        'Slice of Life',
        'Mecha',
        'Musical',
        'Histórico',
        'Sobrenatural',
        'Mistério',
        'Psicológico',
        'Harem',
        'Isekai',
        'Clássico',
        'Vampiros',
        'Demônios',
        'Artes Marciais',
        'Poderes Especiais',
        'Viagem no Tempo',
        'Exorcismo',
        'Guerra',
        'Culinária',
        'Ecchi',
      ],
    };

    return res.status(200).json(tags);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao listar tags',
    });
  }
};

export const getTemporadas = async (req: Request, res: Response) => {
  try {
    const temporadas = {
      temporadas: ['Primavera', 'Verão', 'Outono', 'Inverno'],
    };
    res.status(200).json(temporadas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar temporadas' });
  }
};

export const getEstudios = async (req: Request, res: Response) => {
  try {
    const estudios = {
      estudios: [
        'Studio Pierrot',
        'Madhouse',
        'Bones',
        'Studio Ghibli',
        'Kyoto Animation',
        'Sunrise',
        'A-1 Pictures',
        'White Fox',
        'MAPPA',
        'David Production',
        'TMS Entertainment',
        'P.A. Works',
        'Silver Link',
        'CloverWorks',
        'Sunrise Beyond',
        'Studio Deen',
        'Gainax',
        'Trigger',
        'Khara',
        'Liden Films',
        'Orient',
        'MAPPA Studio 2',
        'AIC',
        'J.C.Staff',
        'Studio VOLN',
        'Tezuka Productions',
        'Brains Base',
        'C-Station',
        '8-Bit',
        'Dogakobo',
        'A-1 Pictures',
        'Gonzo',
        'Kinema Citrus',
      ],
    };
    res.status(200).json(estudios);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estúdios' });
  }
};
