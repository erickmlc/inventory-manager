import { Router } from "#infrastructure/routes/router.js";
import { bodyMiddleware } from "#presentation/http/middlewares/body.middleware.js";
import stockController from "../controllers/stock.controller.js";

const router = new Router();

router.route("/")
    .get(stockController.list)
    .post(bodyMiddleware, stockController.create);

router.route("/:id")
    .get(stockController.get)
    .put(bodyMiddleware, stockController.update)
    .patch(bodyMiddleware, stockController.update)
    .delete(stockController.delete);

export const stockRoutes = router;
