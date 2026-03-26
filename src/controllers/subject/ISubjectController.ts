import type { FastifyReply, FastifyRequest } from "fastify";


export interface ISubjectController {
    create:(req:FastifyRequest,reply:FastifyReply)=>void
    delete:(req:FastifyRequest,reply:FastifyReply)=>void
    findSubject:(req:FastifyRequest,reply:FastifyReply)=>void
    findAllSubject:(req:FastifyRequest,reply:FastifyReply)=>void
    update:(req:FastifyRequest,reply:FastifyReply)=> void

}