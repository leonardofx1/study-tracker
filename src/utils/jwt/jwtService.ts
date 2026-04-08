import type { IJwtService, Payload } from "./iJwtService.js";
import type { FastifyInstance } from "fastify";

export class Jwt implements IJwtService {
  constructor(private app: FastifyInstance) {}

  sign(payload: Payload) {
    return this.app.jwt.sign(payload);
  }

  verify(token: string) {
    try {
      return this.app.jwt.verify<Payload>(token);
    } catch {
      return null;
    }
  }
}
