
import type { UserDto } from "../../dto/user/userDto.js";
import type { IUserRepository } from "./IUserRepository.js";
import { db } from "../../db/index.js";
import { userSchema } from "../../db/schemas/schema.js";
import { eq } from "drizzle-orm";

export class UserRepository implements IUserRepository {
    create=async(userDto:UserDto)=> {
        const res = await db.insert(userSchema).values(userDto).returning()
        return res[0] as UserDto

    }
    delete = async (id:string) => {
        const res  = await db.delete(userSchema).where(eq(userSchema.id,id)).returning()
        return res[0] as UserDto 
        }
    find=async (id:string)=> {
        const user = await db.select().from(userSchema).where(eq(userSchema.id,id))
        return user[0] as UserDto
    }
    update=async (user:UserDto) => {
        const res = await db.update(userSchema).set(user).where(eq(userSchema.id,user.id)).returning()
        return res[0] as UserDto
    }
    
}