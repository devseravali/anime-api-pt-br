export interface AnimeResumo {
  id: number;
  slug: string; 
  arquivo: string; 
  titulo: string;
  ano?: number;
}

export interface AnimeDetalhado {
  id: number;
  titulo: string;
  estudioId: number;
  generos: number[];
  plataformas: number[];
  temporadaId: number;
  statusId: number;
  sinopse: string;
  ano?: number;
  episodios?: number;
  capa: string;
  curiosidades: string[];
  personagens: number[];
}