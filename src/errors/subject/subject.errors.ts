

export class ErrorCreatingSubject extends Error {
    constructor(){
        super('error creating subject.')
        this.name ='error creating subject'
    }


}

export class ErrorUpdateSubject extends Error {
    constructor(){
        super('Error updating subject.')
        this.name ='error updating subject.'
    }
}

export class ErrorDeleteSubject extends Error {
    constructor(){
        super('error deleting subject.')
        this.name ='error deleting suject'
    }
}

export class ErrorFindSubject extends Error {
    constructor(){
        super('error finding subject')
    }
}
export class ErrorSubjectAlreadyExists extends Error {
    constructor (){
        super('error already subject')
        this.name='already subject'
    }
}