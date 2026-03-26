import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import { ErrorFindSubject, ErrorUpdateSubject } from "../../errors/subject/subject.errors.js";
import type { SubjectRepository } from "../../repository/subject/subjectRepository.js";
import type { IFindSubjectService } from "./types/IFindSubjectService.js";
import type { IUpdateSubject } from "./types/IUpdateSubjectService.js";



export class UpdateSubjectService implements IUpdateSubject {
    constructor(private updateRepository:SubjectRepository,private findSubjectService:IFindSubjectService){

    }

    update=async (subject:SubjectDto) => {
        this.existingSubject
        const sub = await this.updateRepository.update(subject)
        if(sub){
            return sub
        }
        throw new ErrorUpdateSubject()
    }
    existingSubject=async(subject:SubjectDto)=>{
        const sub = await this.findSubjectService.findSubject(subject.id)
        if(!sub){
            throw new ErrorFindSubject()
        }
    }
}