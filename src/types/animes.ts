export interface Animes {
    id: number;
    titulo: string;
    ano: number;
    generoIds: number[];
    estudioId: number;
    sinopse: string;
    temporadaId: number;
    statusId: number;
    episodios: number;
    avaliacao: number;
    popularidade?: number;
    capaUrl: string;
    tagIds?: number[];
    plataformaIds?: number[];
}