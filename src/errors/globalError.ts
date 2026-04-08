import type { FastifyInstance } from "fastify"
import { ZodError } from "zod"




export const globalError =(app:FastifyInstance)=> {
     app.setErrorHandler((error, req, reply) => {
  if (error instanceof ZodError) {
    console.log('não é zod')
    return reply.status(400).send({
      errors: error.issues.map(err => ({
        field: err.path[0],
        message: err.message
      }))
    })
  }

  return reply.status(500).send({ message: "Internal server error" })
})}