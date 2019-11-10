export class MovieResquest {
    constructor(
        public title?: string,
        public year?: string) {
        this.title = title;
        this.year = year;
    }
}