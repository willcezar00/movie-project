export class RatingAverage {
    static ratingConverterBySource = new Map([
        ['Internet Movie Database', RatingAverage.getIMDBRatingValue],
        ['Rotten Tomatoes', RatingAverage.getRottenTomatoesRatingValue],
        ['Metacritic', RatingAverage.getMetacriticRatingValue]
    ]);

    static getIMDBRatingValue(rating) {
        return Number(rating.Value.split('/')[0]) * 10;
    }

    static getRottenTomatoesRatingValue(rating) {
        return Number(rating.Value.substring(0, rating.Value.length - 1));
    }

    static getMetacriticRatingValue(rating) {
        return Number(rating.Value.split('/')[0]);
    }

    static getRatingValue(rating) {
        return RatingAverage.ratingConverterBySource.get(rating.Source)(rating);
    }

    static getAverageRating(movie) {
        let ratingSum = movie.Ratings.reduce((accumulator, currentValue) => accumulator + this.getRatingValue(currentValue), 0);
        return ratingSum / movie.Ratings.length;
    }
}