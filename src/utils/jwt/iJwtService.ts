
export interface Payload {
    sub:string
    email:string
}

export interface IJwtService {
    sign:(payload:Payload)=> string
    verify:(token:string) => Payload|null
}