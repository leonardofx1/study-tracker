import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import type { SubjectRepository } from "../../repository/subject/subjectRepository.js";
import type { IUpdateSubject } from "./types/IUpdateSubjectService.js";



export class UpdateSubjectService implements IUpdateSubject {
    constructor(private updateRepository:SubjectRepository){

    }

    update=async (subject:SubjectDto) => {
        const sub = await this.updateRepository.update(subject)
        if(sub){
            return sub
        }
        throw new Error('not updated')
    }
}