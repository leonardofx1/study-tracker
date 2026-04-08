
import bcrypt  from 'bcrypt'
import type { IHash } from './iHash.js'
import { InvalidParameters } from '../../errors/user/user.errors.js'

export class Hash implements IHash {


    hash = async(password:string,salt:string)=> {
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
            const res  = await bcrypt.compare(password,passwordHash)
            if(!res){
                throw new InvalidParameters()
            }
            return res
        
          
        
    }
}