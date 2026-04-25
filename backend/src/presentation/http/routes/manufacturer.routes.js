import { Router } from "#infrastructure/routes/router.js";
import { bodyMiddleware } from "#presentation/http/middlewares/body.middleware.js";
import manufacturerController from "../controllers/manufacturer.controller.js";

const router = new Router();

router.route("/")
    .get(manufacturerController.list)
    .post(bodyMiddleware, manufacturerController.create);

router.route("/:id")
    .get(manufacturerController.get)
    .put(bodyMiddleware, manufacturerController.update)
    .patch(bodyMiddleware, manufacturerController.update)
    .delete(manufacturerController.delete);

export const manufacturerRoutes = router;
