import Router from "express";
import ProjectController from "../controller/project.controller.js";

const router = new Router();

router.post("/project", (res, req) => {
  ProjectController.createProject();
}); // POST - создать
router.get("/project/:id", (res, req) => {
  ProjectController.getProjectByUser();
}); // GET - получить данные
router.get("/project", (res, req) => {
  ProjectController.getAllProjects();
}); /////////////////////////// GET - тест всех проектов

// PUT
// DELETE

export default router;
