import jwt from "@fastify/jwt";
import Fastify from "fastify";


export const app =Fastify()

app.register(jwt,{
    secret:'my secret'
})


const start = async ()=> {
    try {
        app.listen({port:3020} )
        console.log('server online')
    } catch (error) {
        console.error(error)
    }
}
start()


