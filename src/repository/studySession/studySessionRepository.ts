import type { UUID } from "node:crypto";
import type { StudySessionDto } from "../../dto/study/studyDto.js";
import type { IStudySessionRepository } from "./IStudySessionRepository.js";
import { db } from "../../db/index.js";
import { studySession } from "../../db/schemas/schema.js";
import { eq } from "drizzle-orm";

export class StudySessionRepository implements IStudySessionRepository {
  save= async (session: StudySessionDto  ) => {
    return await db.insert(studySession).values(session).returning() as StudySessionDto[]
  }
  delete=async (id:UUID)=> {
    const session = await db.delete(studySession).where(eq(studySession.id,id)).returning()
    return  session[0]?.id ?? null
  } 
  findAllSession=async(subjectId:string) => {
    const allSession = await db.select().from(studySession).where(eq(studySession.subjectId,subjectId))
    return allSession as StudySessionDto[]
  }
  findSession=async (id:string) => {
    const [session] = await db.select().from(studySession).where(eq(studySession.id, id))
    return session as StudySessionDto?? null
  }
  update = async (session:StudySessionDto ) => {
    const [sessionUpdate] = await db.update(studySession).set(session).returning()

    return sessionUpdate as StudySessionDto ?? null
  }
}