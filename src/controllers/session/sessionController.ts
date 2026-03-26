import type { FastifyRequest, FastifyReply } from "fastify";
import type { ISessionController } from "./ISessionController.js";
import { createSessionSchema } from "../../schemasZod/session.js";
import type { CreateSessionService } from "../../service/session/createSessionService.js";
import { randomUUID } from "node:crypto";
import type { StudySessionDto } from "../../dto/study/studyDto.js";
import { ErrorCreatingSession, ErrorDeleteSession, ErrorFindSession, ErrorUpdateSession } from "../../errors/session/session.erros.js";
import { ErrorFindSubject } from "../../errors/subject/subject.errors.js";
import type { DeleteSessionService } from "../../service/session/deleteSessionService.js";
import type { FindAllSessionService } from "../../service/session/findAllSessionService.js";
import type { FindSessionService } from "../../service/session/findSessionService.js";
import type { UpdateSessionService } from "../../service/session/updateSessionService.js";



export class SessionController implements ISessionController {
    constructor(private createSessionService:CreateSessionService,private deleteService:DeleteSessionService,private findAllSessionService:FindAllSessionService,private findSessionService:FindSessionService,private updateSessionService:UpdateSessionService){}
    create=async (req: FastifyRequest, reply: FastifyReply) => {
        try{
            const session = createSessionSchema.parse(req.body) 
            session.id = randomUUID()
            const res = await this.createSessionService.create(session)

            reply.status(201).send({message:'session created successfully'})

        }catch(error){
            if(error instanceof ErrorCreatingSession){
                reply.status(500).send({message:'Error creating study section.'})
            }
            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:'subject not found.'})
            }
        }

    }
    delete=async (req: FastifyRequest, reply: FastifyReply) => {
        try{
            const {id} = await req.params as {id:string}
            const session =await this.deleteService.delete(id)
            reply.status(204).send({message:'deleted session successfully.'})
        }catch(error){
            if(error instanceof ErrorDeleteSession){
                reply.status(404).send({message:'The feature you tried to delete either doesnt exist or has already been removed.'})
            }
        }

    }
    findAllSession=async (req: FastifyRequest, reply: FastifyReply) => {

        try{
            const {id} = req.params as {id:string}
            const allSessions = await this.findAllSessionService.findAll(id)

            reply.status(200).send(allSessions)

        }
        catch(error){
            if(error instanceof ErrorFindSession){
                reply.status(404).send({message:'session not found.'})
            }

            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:'subject not found.'})
            }
        }


    }
    findSession=async (req: FastifyRequest, reply: FastifyReply) => {

        try {
            const {id} = req.params as {id:string}
            const session = await this.findSessionService.findSession(id)

            reply.status(200).send(session)
        } catch (error) {
            if(error instanceof ErrorFindSession )
{
    reply.status(404).send({message:'Session not found.'})
}        }

    }
    update=async (req: FastifyRequest, reply: FastifyReply) => {
        try{
            const session = await req.body
            const updateRes = await this.updateSessionService.update(session as StudySessionDto)
            reply.status(200).send({message:'Study section successfully updated.'})
        }catch(error){
            if(error instanceof ErrorUpdateSession){
                reply.status(500).send({message:'Error updating study section.'})
            }
            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:'subject not found.'})
            }
        }
    }

}