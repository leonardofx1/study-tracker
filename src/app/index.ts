import jwt from "@fastify/jwt";
import Fastify from "fastify";
import { subjectRoutes } from "../routes/subject/subject.js";
import { globalError } from "../errors/globalError.js";


export const app =Fastify()

app.register(jwt,{
    secret:'my secret'
})
app.register(subjectRoutes)

globalError(app)
const start = async ()=> {
    try {
        app.listen({port:3020} )
        console.log('server online')
    } catch (error) {
        console.error(error)
    }
}
start()


