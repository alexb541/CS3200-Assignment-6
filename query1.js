await redisClient.set("tweetCount", 0);

const cursor = tweets.find();
for await (const doc of cursor) {
    await redisClient.incr("tweetCount");
}

const count = await redisClient.get("tweetCount");
console.log(`There were ${count} tweets`);