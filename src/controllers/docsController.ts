import { Request, Response } from 'express';

export const obterDocumentacao = async (req: Request, res: Response) => {
  try {
    const documentacao = {
      titulo: 'Documentação da API de Animes em Português',
      descricao:
        'Esta API fornece informações sobre animes, incluindo gêneros, plataformas, status e tags.',
      endpoints: [
        {
          metodo: 'GET',
          rota: '/generos',
          descricao: 'Retorna uma lista de gêneros de animes.',
        },
        {
          metodo: 'GET',
          rota: '/plataformas',
          descricao: 'Retorna uma lista de plataformas de streaming que oferecem animes.',
        },
        {
          metodo: 'GET',
          rota: '/status',
          descricao: 'Retorna uma lista de status de animes.',
        },
        {
          metodo: 'GET',
          rota: '/tags',
          descricao: 'Retorna uma lista de tags associadas a animes.',
        },
      ],
    };
    res.status(200).json(documentacao);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter documentação' });
  }
};
