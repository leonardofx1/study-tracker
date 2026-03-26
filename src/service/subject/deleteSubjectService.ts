
import { ErrorDeleteSubject } from "../../errors/subject/subject.errors.js";
import type { SubjectRepository } from "../../repository/subject/subjectRepository.js";
import type { IDeleteSubjectService } from "./types/IDeleteSubjectService.js";



export class DeleteSubjectService implements IDeleteSubjectService {
    constructor(private subjectRepository:SubjectRepository){

    }
    delete=async (subjectId:string)=> {

        const subDeleted = await this.subjectRepository.delete(subjectId)
        if(subDeleted){
            return subDeleted
        }
        throw new ErrorDeleteSubject()

    }
}