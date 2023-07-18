import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import client from "../../database.ts"
import "https://deno.land/x/dotenv@v3.2.2/mod.ts";
const router = new Router

router.get('/user/:id', async (ctx) => {
    try {
        const {id} = ctx.params
        const userData = await client.queryObject(`select * from otaku_schema.users where user_id=$id`,{id});
        ctx.response.body=userData.rows
      } catch (error) {
        console.error(error)
      }
})
    
export default router