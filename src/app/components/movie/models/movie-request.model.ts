export class MovieResquest {
    constructor(
        public titulo?: string,
        public ano?: string) {
        this.titulo = titulo;
        this.ano = ano;
    }
}