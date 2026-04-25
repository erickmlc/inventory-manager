import { Router } from "#infrastructure/routes/router.js";

import { languageMiddleware } from "#presentation/http/middlewares/language.middleware.js";
import { validateMethodMiddleware } from "#presentation/http/middlewares/method.middleware.js";
import { corsMiddleware } from "#presentation/http/middlewares/cors.middleware.js";
import { validateIdMiddleware } from "#presentation/http/middlewares/id.middleware.js";

const router = new Router();

router.use(corsMiddleware);
router.use(validateMethodMiddleware);
router.use(languageMiddleware);

router.param("id", validateIdMiddleware);

export default router;
