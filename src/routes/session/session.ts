import type { FastifyInstance } from "fastify";
import { factorySessionController } from "../../factory/session/sessionFactory.js";







export const SessionRoutes = (app:FastifyInstance) => {
  app.post('/session/create', factorySessionController.create)
  app.post('/session/delete/:id', factorySessionController.delete)
  app.post('/session/update', factorySessionController.update)
  app.get('/session/findAllSession/:idSubject', factorySessionController.findAllSession)
  app.get('/session/findSession/:id', factorySessionController.findSession)
 
}