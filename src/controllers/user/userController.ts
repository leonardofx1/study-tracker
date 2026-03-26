import type { FastifyRequest, FastifyReply } from "fastify";
import type { IUserContoller } from "./IUserController.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICreateSessionService } from "../../service/session/types/ICreateSessionService.js";
import type { IDeleteService } from "../../service/user/types/IDeleteUserService.js";
import type { IUpdateUser } from "../../service/user/types/IUpdateUserService.js";
import type { ILoginUserService } from "../../service/user/types/ILoginUserService.js";
import type { UserDto } from "../../dto/user/userDto.js";
import { randomUUID } from "node:crypto";
import type { ICreateUserService } from "../../service/user/types/ICreateUserService.js";
import { ErrorCreatingUser, ErrorDeleteUser, ErrorUpdateUser, UserAlreadyExists } from "../../errors/user/user.errors.js";




export class UserController implements IUserContoller {
    constructor(private createUserService:ICreateUserService,private deleteUserService:IDeleteService,private loginService:ILoginUserService,private updateService:IUpdateUser){

    }
    create=async (request: FastifyRequest, reply: FastifyReply) => {
       try {
         const user =await request.body as UserDto
        user.id = randomUUID()
        const isCreated = await this.createUserService.save(user)
        reply.status(200).send({message:'user successfully registered.'})
       } catch (error) {
        if(error instanceof UserAlreadyExists){
            reply.status(409).send({message:'user already exists.'})
        }
        if(error instanceof ErrorCreatingUser){
            reply.status(500).send({message:'internal server error.'})
        }
        throw error
       }

    }
    login=async (req: FastifyRequest, reply: FastifyReply) => {
        try {
            const user = req.body as UserDto
            const res = await this.loginService.login(user)
        } catch (error) {
            
        }

    }
    delete=async(req: FastifyRequest, reply: FastifyReply) =>{
        try{
            const {id} = req.params as {id:string}
            const userId = await this.deleteUserService.delete(id)

            reply.status(200).send({message:'user deleted successfully.'})
        }catch(error){
            if(error instanceof ErrorDeleteUser){
                reply.status(500).send({message:'user not deleted.'})
            }
            throw error
        }
    }
    update=async (req: FastifyRequest, reply: FastifyReply) => {
        try{
            const userUpdate = req.body as UserDto
            const res = await this.updateService.update(userUpdate)


            reply.status(200).send({message:'user updated successfully.'})
        }catch(error){
            if(error instanceof UserAlreadyExists) {
                reply.status(404).send({message:'user not found.'})
            }
            if(error instanceof ErrorUpdateUser){
                reply.status(500).send({message:'user not updated.'})
            }
            throw error
        }
    }

}