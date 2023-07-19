import { Router } from "https://deno.land/x/oak@v12.6.0/mod.ts";
import prisma from "../database.ts";

const routes = new Router()

routes.get("user/:id", async (ctx) => {
    try {
        const {id} = ctx.params
        const data = await prisma.users.findUnique({
            where: {
                user_id: id
            },
        })
        ctx.response.body={
            status: 200,
            message:"User Data Response",
            data: data
        }
    } catch (error) {
        console.error(error)
    }
})

routes.post("user/create", async (ctx) => {
    try {
        const user_data = await ctx.request.body().value
        await prisma.users.create({
            data: user_data,
          })
        ctx.response.body={
            status: 201,
            message: "User created"
        }
    } catch (error) {
        console.error(error)
    }
})

routes.put("user/:id/edit", async (ctx) => {
    try {
        const {id} = ctx.params
        const edited_data = await ctx.request.body().value
        await prisma.users.update({
            where:{
                user_id: id
            },
            data: edited_data
          })
        ctx.response.body={
            status: 200,
            message: "User Credentials edited"
        }
    } catch (error) {
        console.error(error)
    }
})

routes.delete("user/:id/delete", async (ctx) => {
    try {
        const {id} = ctx.params
        await prisma.users.delete({
            where:{
                user_id: id
            }
        })
        ctx.response.body={
            status: 200,
            message: "User Deleted"
        }
    } catch (error) {
        console.error(error)
    }
})

export default routes