

export interface IHash {
    hash:(password:string,salt:number)=> Promise<string>
    salt:(num:number)=>Promise<string>
    compare:(password:string,passwordHash:string)=>Promise<Boolean>
}