const Router = require("express");
const router = new Router();
const userController = require("../controller/user.controller.js");

router.post("/user", userController.createUser); // POST - создать
router.get("/user", userController.getUsers); // GET - получить данные
router.get("/user/:id", userController.getUser);
router.put("/user", userController.updateUser); // PUT - обновить данные
router.delete("/user/:id", userController.deleteUser); // DELETE - удалить данные

module.exports = router;
