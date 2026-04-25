import router from "#main/routes.js";

import { categoryRoutes } from "#presentation/http/routes/category.routes.js";
import { itemRoutes } from "#presentation/http/routes/item.routes.js";
import { locationRoutes } from "#presentation/http/routes/location.routes.js";
import { manufacturerRoutes } from "#presentation/http/routes/manufacturer.routes.js";
import { stockRoutes } from "#presentation/http/routes/stock.routes.js";

router.use("/categories", categoryRoutes);
router.use("/items", itemRoutes);
router.use("/locations", locationRoutes);
router.use("/manufacturers", manufacturerRoutes);
router.use("/stock", stockRoutes);
