import Fastify from "fastify";


const app =Fastify()




const start = async ()=> {
    try {
        app.listen({port:3020} )
        console.log('server online')
    } catch (error) {
        console.error(error)
    }
}
start()


