import { Router } from "#infrastructure/routes/router.js";
import { bodyMiddleware } from "#presentation/http/middlewares/body.middleware.js";
import categoryController from "../controllers/category.controller.js";

const router = new Router();

router.route("/")
    .get(categoryController.list)
    .post(bodyMiddleware, categoryController.create);

router.route("/:id")
    .get(categoryController.get)
    .put(bodyMiddleware, categoryController.update)
    .patch(bodyMiddleware, categoryController.update)
    .delete(categoryController.delete);

export const categoryRoutes = router;
