import type { UUID } from "node:crypto";
import type { SubjectDto } from "../../dto/subject/subjectDto.js";
import type { ISubjectRepository } from "./ISubjectRepository.js";
import { db } from "../../db/index.js";
import { subjectSchema } from "../../db/schemas/schema.js";
import { eq } from "drizzle-orm";


export class SubjectRepository  implements ISubjectRepository {
create=async (subject:SubjectDto)=> {
    const _subject = await db.insert(subjectSchema).values(subject).returning()
    return _subject[0] as SubjectDto??null
}
delete=async (id:string)=> {
    const subject = await db.delete(subjectSchema).where(eq(subjectSchema.id,id)).returning()
    return subject[0] as SubjectDto
}
find=async(id:string)=> {
    const subject = await db.select().from(subjectSchema).where(eq(subjectSchema.id,id))
    return subject[0] as SubjectDto 
}
findAll=async (userId:string)=> {
    const all = await  db.select().from(subjectSchema).where(eq(subjectSchema.idUser,userId))
    return all as SubjectDto[]
}
update=async (subject:SubjectDto) => {
    const subjectUp = await db.update(subjectSchema).set(subject).where(eq(subjectSchema.id,subject.id)).returning()

    return  subjectUp[0] as SubjectDto
}

}