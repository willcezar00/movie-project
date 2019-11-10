export class MovieResponse {
    constructor(
        public title?: string,
        public year?: string) {
        this.title = title;
        this.year = year;
    }
}