const redis = require('redis')
const client = redis.createClient();

client.connect()
    .then(() => console.log('Connected to Redis'))
    .catch(err => console.error('Redis connection error:', err));

async function runRedisOperations () {
    try {
        await client.set("name", "John Doe");
        console.log("Stored key-value: name = John Doe");

        const value = await client.get("name");
        console.log("Retrieved value:", value);

        await client.del("name");
        console.log("Deleted key: name");

        await client.quit();
        console.log("Redis connection closed");
    } catch (error) {
        console.error("Error:", error);
    }
}

runRedisOperations();

