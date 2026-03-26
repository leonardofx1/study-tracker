import type { FastifyReply, FastifyRequest } from "fastify";


export interface ISessionController {
    create:(req:FastifyRequest,reply:FastifyReply)=> void
    delete:(req:FastifyRequest,reply:FastifyReply)=> void
    findAllSession:(req:FastifyRequest,reply:FastifyReply)=>void
    findSession:(req:FastifyRequest,reply:FastifyReply)=>void
    update:(req:FastifyRequest,reply:FastifyReply)=>void
}