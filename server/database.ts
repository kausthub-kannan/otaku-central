import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";
import "https://deno.land/x/dotenv@v3.2.2/mod.ts";

Deno.env.set('DB_URL', 'postgresql://kausthub:admin@1783@localhost:5432/otaku_central');
const client = new Client(Deno.env.get('DB_URL'));

try {
  await client.connect();
  console.log("Connected")
} catch (e) {
  if (e instanceof Deno.errors.ConnectionRefused) {
    console.log(e.message);
  }
}

export default client

