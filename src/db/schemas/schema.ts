import { date, doublePrecision, integer, pgTable, text, uuid } from "drizzle-orm/pg-core";



export const userSchema = pgTable('userSchema', {
    id:uuid('id').primaryKey().notNull(),
    name:text('name').notNull(),
    age:integer('age').notNull(),
    
})

export const subjectSchema= pgTable('subjectSchema',{
    id:uuid('id').primaryKey().notNull(),
    name:text('name').notNull(),
    idUser:uuid('idUser').references(()=> userSchema.id)
})

export const studySession = pgTable('studySession', {
    id:uuid('id').primaryKey(),
    sessionDuration:doublePrecision('sessionDuration'),
    date:date('date'),
    subjectId:uuid('subjectId').references(()=>subjectSchema.id)
})