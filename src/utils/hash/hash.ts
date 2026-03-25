
import bcrypt  from 'bcrypt'
import type { IHash } from './iHash.js'

export class Hash implements IHash {


    hash = async(password:string,salt:number)=> {
        try {
         
            const passwordHash = bcrypt.hash(password,salt)
            return passwordHash
        } catch (error) {
                throw error
        }
    }
    salt= async(num:number=5)=>{
        try {
            return bcrypt.genSalt(num)
        } catch (error) {
            throw error
        }
    }
    compare = async(password:string,passwordHash:string)=> {
        try {
            const res  = await bcrypt.compare(password,passwordHash)
            return res
        } catch (error) {
            throw error
        }
    }
}