
import type { SubjectRepository } from "../../repository/subject/subjectRepository.js";
import type { IDeleteService } from "./types/IDeleteSubjectService.js";



export class DeleteSubjectService implements IDeleteService {
    constructor(private subjectRepository:SubjectRepository){

    }
    delete=async (subjectId:string)=> {

        const subDeleted = await this.subjectRepository.delete(subjectId)
        if(subDeleted){
            return subDeleted
        }
        throw new Error('not deleted')

    }
}