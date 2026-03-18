import type { FastifyRequest, FastifyReply } from "fastify";
import type { IUserContoller } from "./IUserController.js";
import type { IUserRepository } from "../../repository/user/IUserRepository.js";
import type { ICreateSessionService } from "../../service/session/types/ICreateSessionService.js";
import type { IDeleteService } from "../../service/user/types/IDeleteUserService.js";
import type { IFindUserService } from "../../service/user/types/IFindUserService.js";
import type { IUpdateUser } from "../../service/user/types/IUpdateUserService.js";




export class UserController implements IUserContoller {
    constructor(createUserService:ICreateSessionService,deleteUserService:IDeleteService,findService:IFindUserService,updateService:IUpdateUser){

    }
    create=async (request: FastifyRequest, reply: FastifyReply) => {
        const user =await request.body

    }
    delete: (req: FastifyRequest, reply: FastifyReply) => void
    find: (req: FastifyRequest, reply: FastifyReply) => void;
    update: (req: FastifyRequest, reply: FastifyReply) => void;

}