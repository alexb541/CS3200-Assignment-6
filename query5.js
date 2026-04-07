const cursor = tweets.find();
for await (const doc of cursor) {
    const tweetId = doc.id_str;
    const screenName = doc.user.screen_name;

    await redisClient.rPush(`tweets:${screenName}`, tweetId);

    await redisClient.hSet(`tweet:${tweetId}`, {
        user_name: doc.user.screen_name || "",
        text: doc.text || "",
        created_at: doc.created_at || "",
        retweet_count: String(doc.retweet_count || 0),
        favorite_count: String(doc.favorite_count || 0)
    });
}