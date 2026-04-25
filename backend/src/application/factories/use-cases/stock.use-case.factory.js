import createStockUseCase from "#application/stock/use-cases/stock/create-stock.use-case.js";
import listStockUseCase from "#application/stock/use-cases/stock/list-stock.use-case.js";
import getStockUseCase from "#application/stock/use-cases/stock/get-stock.use-case.js";
import updateStockUseCase from "#application/stock/use-cases/stock/update-stock.use-case.js";
import deleteStockUseCase from "#application/stock/use-cases/stock/delete-stock.use-case.js";

export const stockUseCases = {
    create: createStockUseCase,
    list: listStockUseCase,
    get: getStockUseCase,
    update: updateStockUseCase,
    delete: deleteStockUseCase,
};
