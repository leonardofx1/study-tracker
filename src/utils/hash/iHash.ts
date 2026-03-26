

export interface IHash {
    hash:(password:string,salt:string)=> Promise<string>
    salt:(num:number)=>Promise<string>
    compare:(password:string,passwordHash:string)=>Promise<Boolean>
}