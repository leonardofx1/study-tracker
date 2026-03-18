import type { FastifyReply, FastifyRequest } from "fastify";



export interface IUserContoller{
    create:(request:FastifyRequest,reply:FastifyReply)=>void
    delete:(req:FastifyRequest,reply:FastifyReply) =>void
    update:(req:FastifyRequest,reply:FastifyReply)=>void
    find:(req:FastifyRequest,reply:FastifyReply) => void
}