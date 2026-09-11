import { createClient } from "redis";

const { REDIS_HOST, REDIS_PORT } = process.env;

export async function get() {
  const client = await createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
  })
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  await client.set("key", "Hello World");
  const value = await client.get("key");
  client.destroy();
  return value; // 'value'
}