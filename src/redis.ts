import { createClient } from "redis";

export async function get() {
  const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

  await client.set("key", "Hello World");
  const value = await client.get("key");
  client.destroy();
  return value; // 'value'
}