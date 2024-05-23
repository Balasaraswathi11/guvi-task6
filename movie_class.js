class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
}

const movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new Movie("Casino Royale", "Eon Productions");
const movie3 = new Movie("Inception", "Legendary Pictures", "PG-13");

console.log("Movie 1:");
console.log("Title:", movie1.title);
console.log("Studio:", movie1.studio);
console.log("Rating:", movie1.rating);

console.log("\nMovie 2:");
console.log("Title:", movie2.title);
console.log("Studio:", movie2.studio);
console.log("Rating:", movie2.rating);

console.log("\nMovie 3:");
console.log("Title:", movie3.title);
console.log("Studio:", movie3.studio);
console.log("Rating:", movie3.rating);

