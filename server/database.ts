import { PrismaClient } from './generated/client/deno/edge.ts'
import { config } from "https://deno.land/x/dotenv@v3.2.2/mod.ts";

const envVars = await config()

const prisma = new PrismaClient({
    datasources: {
        db:{
            url: envVars.DATABASE_URL
        }
    }
})

export default prisma