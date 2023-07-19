import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";
import routes from "./index.ts"

const envVars = await config()

const app = new Application();
const port = envVars.PORT

//Logger
app.use(async (ctx, nxt) => {
  const start = Date.now();
  await nxt();
  const delta = Date.now() - start;
  console.log(` %c ${ctx.request.method} - ${ctx.request.url} - ${delta}ms`, 'color: #A2FF86')
})

// Connect the Routes
app.use(routes.users.routes());
app.use(routes.users.allowedMethods());

console.log(`%cServer Started @ http://localhost:${port}`, 'color: #A2FF86')
await app.listen({ port: parseInt(port) }); 