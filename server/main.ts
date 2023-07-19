import { Application } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import routes from "./index.ts"

const app = new Application();

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

await app.listen({ port: 8000 });