import type { ISubjectRepository } from "../../repository/subject/ISubjectRepository.js";
import type { IFindSubjectService, ISubject } from "./types/IFindSubjectService.js";



export class FindSubjectService implements IFindSubjectService {
    constructor(private subjectRepository:ISubjectRepository){

    }
    findSubject=async(sub:ISubject)=> {
        const subject= await this.subjectRepository.existingSubject(sub.name,sub.idUser)
        if(subject)
        return subject

        return null

    }
}