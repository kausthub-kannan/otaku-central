import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import prisma from "../database.ts";

const routes = new Router()

routes.get("/:id", async (ctx) => {
    const {id} = ctx.params
    const data = await prisma.users.findUnique({
        where: {
            user_id: id
        },
    })
    ctx.response.body=data
})

export default routes