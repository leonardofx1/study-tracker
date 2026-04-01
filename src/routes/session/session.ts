import type { FastifyInstance } from "fastify";







export const SessionRoutes = (app:FastifyInstance) => {
  app.post('/session/create', factorySubjectController.create)
  app.post('/session/delete/:id', factorySubjectController.delete)
  app.post('/session/update', factorySubjectController.update)
  app.get('/session/findAllSubject/:idUser', factorySubjectController.findAllSubject)
  app.get('/session/findSubject/:id', factorySubjectController.findSubject)
 
}