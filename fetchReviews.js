import gplay from 'google-play-scraper';
import fs from 'fs';

// make a delay to avoid getting blocked by Google
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// header
const header = 'title;user_id;date;overall_score;score;thumbsUp;text\n';
fs.writeFileSync('reviews.csv', header);

const fetchReviews = async (games, type) => {
    console.log(`Fetching reviews... From top 50 ${type} games ....`);
    for (let game of games) {
        try {
            const result = await gplay.reviews({
                appId: game.appId,
                sort: gplay.sort.HELPFULNESS,
                num: 500,
            });

            const reviews = result.data;
            let csv = '';
            for (let review of reviews) {
                if (review.thumbsUp < 50) continue;
                csv += `${game.title};${review.id};${review.date};${game.score};${review.score};${review.thumbsUp};${review.text.replace(/(\r\n|\n|\r|;)/gm, ' ')}\n`;
            }
            // write to file
            fs.appendFileSync('reviews.csv', csv);

            console.log(`Fetched reviews for game: ${game.title}`);
        } catch (err) {
            console.error(`Error fetching reviews for game: ${game.title}`, err);
        }
        await delay(200); // some delay to avoid getting blocked
    }
    console.log(`Fetching reviews for ${type} games completed!`);
};

// Fetch top 200 free games
gplay.list({
    collection: gplay.collection.TOP_FREE,
    category: gplay.category.GAME,
    num: 200,
    lang: 'en',
}).then(async (bestGames) => {
    console.log(bestGames.length);
    await fetchReviews(bestGames, 'free');
}).catch(console.error);

// Fetch top 200 paid games
gplay.list({
    collection: gplay.collection.TOP_PAID,
    category: gplay.category.GAME,
    num: 200,
    lang: 'en',
}).then(async (bestGames) => {
    // count how many items are in the list
    console.log(bestGames.length);
    await fetchReviews(bestGames, 'paid');
}).catch(console.error);
