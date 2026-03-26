import { ErrorFindSubject } from "../../errors/subject/subject.errors.js";
import { UserNotFoundError } from "../../errors/user/user.errors.js";
import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { FindUserService } from "../user/findUserService.js";
import type { IFindSubjectService, ISubject } from "./types/IFindSubjectService.js";



export class FindSubjectService implements IFindSubjectService {
    constructor(private subjectRepository:ISubjectRepository){

    }
    findSubject=async(id:string)=> {
        const subject= await this.subjectRepository.find(id)
        if(subject){
                return subject
        }
        throw new ErrorFindSubject()
    }
 
}