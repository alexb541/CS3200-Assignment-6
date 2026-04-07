await redisClient.set("favoritesSum", 0);

const cursor = tweets.find();
for await (const doc of cursor) {
    await redisClient.incrBy("favoritesSum", doc.favorite_count || 0);
}

const total = await redisClient.get("favoritesSum");
console.log(`Total favorites: ${total}`);