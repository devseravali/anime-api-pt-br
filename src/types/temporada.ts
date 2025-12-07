export interface Temporada {
  id: number;
  slug: string;
  animeId: number;
  nome: string;
  ano: number;
  episodios: number;
  statusId: number;
  temporadaId?: number;
  sinopse: string;
  capaUrl: string;
  curiosidades?: string[];
}
