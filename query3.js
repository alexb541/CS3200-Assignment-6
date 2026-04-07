const cursor = tweets.find();
for await (const doc of cursor) {
    await redisClient.sAdd("screen_names", doc.user.screen_name);
}

const distinctCount = await redisClient.sCard("screen_names");
console.log(`There are ${distinctCount} distinct users`);