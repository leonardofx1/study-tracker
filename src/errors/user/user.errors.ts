

export class ErrorCreatingUser extends Error {
    constructor(){
        super('error creating user')
        this.name = 'error creating user.'
    }
    
}

export class ErrorUpdateUser extends Error {
    constructor(){
        super('error updating user')
        this.name ='error updating user'
    }
}

export class ErrorDeleteUser extends Error {
    constructor(){
        super('error when deleting user')
        this.name='error deleting user'
    }
}

export class UserAlreadyExists extends Error {
    constructor(){
        super(' user already exists')
        this.name ='error user already exists'
    }
}

export class UserNotFoundError extends Error {
    constructor(){
        super('user not found')
        this.name ='user not found'
    }
}