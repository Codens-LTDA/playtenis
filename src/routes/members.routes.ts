import { Router } from "express";

const membersRoute = Router();

membersRoute.get("/", (request, response) => {
  return response.status(201).json({ message: "players routes ok" });
});

export { membersRoute };
