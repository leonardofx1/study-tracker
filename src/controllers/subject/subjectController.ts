import type { FastifyRequest, FastifyReply } from "fastify";
import type { ISubjectController } from "./ISubjectController.js";
import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import type { ICreateSubjectService } from "../../service/subject/types/ICreateSubjectService.js";
import type {IDeleteSubjectService} from "../..//service/subject/types/IDeleteSubjectService.js"
import { UserNotFoundError } from "../../errors/user/user.errors.js";
import { ErrorCreatingSubject, ErrorDeleteSubject, ErrorFindSubject, ErrorSubjectAlreadyExists, ErrorUpdateSubject } from "../../errors/subject/subject.errors.js";
import type { IUpdateSubject } from "../../service/subject/types/IUpdateSubjectService.js";
import type { FindAllSubject } from "../../service/subject/findAllSubjectService.js";

import type { FindSubjectService } from "../../service/subject/findSubjectService.js";

import { subjectIdSchema, subjectIdUserSchema, subjectSchema } from "../../schemasZod/subject.js";




export class SubjectController implements ISubjectController {
    constructor(private createSubjectService:ICreateSubjectService,private deleteSubjectService:IDeleteSubjectService,private updateSubjectService:IUpdateSubject,private findAllSubjectService:FindAllSubject,private findSubjectService:FindSubjectService){

    }

    create= async(req: FastifyRequest, reply: FastifyReply) => {
        try{
            const subject = req.body as SubjectDto
            const res =  subjectSchema.parse(subject)
            console.log(subject,'dentro')
     
            const resCreate = await this.createSubjectService.create(subject)
            reply.status(200).send({message:'subject successfully created.'})

        }catch(error){
           
            if(error instanceof UserNotFoundError){

                reply.status(404).send({message:"user not found."})
            }
            if(error instanceof ErrorSubjectAlreadyExists){
                reply.status(409).send({message:"subject already exists."})
            }
            if(error instanceof ErrorCreatingSubject){
                reply.status(500).send({message:"it was not possible to create the subject."})
            }
            throw error
        }
    }
    delete= async(req: FastifyRequest, reply: FastifyReply) => {
        try{
            const {id}= subjectIdSchema.parse(req.params) as {id:string}
            const res = await this.deleteSubjectService.delete(id)

        }catch(error){
     
            if(error instanceof ErrorDeleteSubject){
                reply.status(500).send({message:'error deleting subject.'})
            }
          throw error
        }

    }
    update=async  (req: FastifyRequest, reply: FastifyReply) => {
        try{
            const subject =  subjectSchema.parse(req.body) as SubjectDto
            const up = await this.updateSubjectService.update(subject)
            reply.status(200).send({message:'Subject updated successfully.'})
        }
        catch(error){
            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:'subject not found.'})
            }
            if(error instanceof ErrorUpdateSubject){
                reply.status(500).send({message:'internal server error.'})
            }
            throw error
        }

    }
    findAllSubject=async (req: FastifyRequest, reply: FastifyReply) => {
   
        try{
            const {idUser} =subjectIdUserSchema.parse(req.params) as {idUser:string}
            const allSubject =await  this.findAllSubjectService.findAllSubject(idUser)
            reply.status(200).send(allSubject)

        }catch(error){
            if(error instanceof UserNotFoundError){
                reply.status(404).send({message:'user not found.'})
            }
            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:'subject not found.'})
            }
            throw error
        }

    }
    findSubject= async(req: FastifyRequest, reply: FastifyReply) => {
       
        try{
            const {id} = subjectIdSchema.parse(req.params) as {id:string}
            const sub = await this.findSubjectService.findSubject(id)
            reply.status(200).send(sub)

        }catch(error){
            if(error instanceof ErrorFindSubject){
                reply.status(404).send({message:"The user's topics were not found."})
            }
            throw error
        }
    }
}