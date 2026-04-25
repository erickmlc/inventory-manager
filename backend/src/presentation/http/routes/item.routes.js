import { Router } from "#infrastructure/routes/router.js";
import { bodyMiddleware } from "#presentation/http/middlewares/body.middleware.js";
import itemController from "../controllers/item.controller.js";

const router = new Router();

router.route("/")
    .get(itemController.list)
    .post(bodyMiddleware, itemController.create);

router.route("/:id")
    .get(itemController.get)
    .put(bodyMiddleware, itemController.update)
    .patch(bodyMiddleware, itemController.update)
    .delete(itemController.delete);

export const itemRoutes = router;
