const cursor = tweets.find();
for await (const doc of cursor) {
    await redisClient.zIncrBy("leaderboard", 1, doc.user.screen_name);
}

const top10 = await redisClient.zRangeWithScores("leaderboard", 0, 9, { REV: true });

console.log("Top 10 users by tweet count:");
top10.forEach((entry, i) => {
    console.log(`${i + 1}. ${entry.value} - ${entry.score} tweets`);
});