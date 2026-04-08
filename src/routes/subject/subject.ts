import type { FastifyInstance } from "fastify";

import { SubjectController } from "../../controllers/subject/subjectController.js";
import { factorySubjectController } from "../../factory/subject/subjectFactory.js";








export const subjectRoutes = (app:FastifyInstance) => {
  app.post('/subject/create', factorySubjectController.create)
  app.post('/subject/delete/:id', factorySubjectController.delete)
  app.post('/subject/update', factorySubjectController.update)
  app.get('/subject/findAllSubject/:idUser', factorySubjectController.findAllSubject)
  app.get('/subject/findSubject/:id', factorySubjectController.findSubject)
 
}