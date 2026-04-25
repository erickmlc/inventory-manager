import { Router } from "#infrastructure/routes/router.js";
import { bodyMiddleware } from "#presentation/http/middlewares/body.middleware.js";
import locationController from "../controllers/location.controller.js";

const router = new Router();

router.route("/")
    .get(locationController.list)
    .post(bodyMiddleware, locationController.create);

router.route("/:id")
    .get(locationController.get)
    .put(bodyMiddleware, locationController.update)
    .patch(bodyMiddleware, locationController.update)
    .delete(locationController.delete);

export const locationRoutes = router;
