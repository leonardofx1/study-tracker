


export class ErrorCreatingSession extends Error {
    constructor(){
        super('error creating session.')
        this.name='error creating session'
    }
}

export class ErrorUpdateSession extends Error{
    constructor(){
        super('error updating session')
        this.name ='error updating session.'
    }
}

export class ErrorFindSession extends Error {
    constructor(){
        super('error find session')
        this.name='error find session'
    }
}

export class ErrorDeleteSession extends Error {
    constructor(){
        super('error deleting session')
        this.name='error deleting session'
    }
}

export class ErrorAlreadySession extends Error {
    constructor(){
        super('error session already exists')
        this.name='error session already exists'
    }
}