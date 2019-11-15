import { Movie } from './movie.model';

export class MovieResponse {
    constructor(
        public Response?: String,
        public Search?: Movie[],
        public totalResults?: string
    ){}
}
