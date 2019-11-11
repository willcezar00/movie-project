export class Movie {
    constructor(
        public Poster?: string,
        public Title?: string,
        public Type?: string,
        public Year?: string,
        public imdbID?: string,
    ) {
        this.Poster = Poster;
        this.Title = Title;
        this.Type = Type;
        this.Year = Year;
        this.imdbID = imdbID;

    }
}
