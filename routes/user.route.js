import Router from "express";
import UserController from "../controller/user.controller.js";

const router = new Router();

router.post("/user", (res, req) => {
  UserController.createUser();
}); // POST - создать
router.get("/user", (res, req) => {
  UserController.getUsers();
}); // GET - получить данные
router.get("/user/:id", (res, req) => {
  UserController.getUser();
});
router.put("/user", (res, req) => {
  UserController.updateUser();
}); // PUT - обновить данные
router.delete("/user/:id", (res, req) => {
  UserController.deleteUser();
}); // DELETE - удалить данные

export default router;
