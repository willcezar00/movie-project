import { Movie } from './movie.model';

export class MovieResponse {
    constructor(
        public Response?: string,
        public Search?: Movie[],
        public totalResults?: string,

    ) {
        this.Response = Response;
        this.Search = Search;
        this.totalResults = totalResults;
    }
}
