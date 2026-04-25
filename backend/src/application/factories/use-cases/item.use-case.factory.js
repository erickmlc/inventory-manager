import createItemUseCase from "#application/stock/use-cases/item/create-item.use-case.js";
import listItemUseCase from "#application/stock/use-cases/item/list-item.use-case.js";
import getItemUseCase from "#application/stock/use-cases/item/get-item.use-case.js";
import updateItemUseCase from "#application/stock/use-cases/item/update-item.use-case.js";
import deleteItemUseCase from "#application/stock/use-cases/item/delete-item.use-case.js";

export const itemUseCases = {
    create: createItemUseCase,
    list: listItemUseCase,
    get: getItemUseCase,
    update: updateItemUseCase,
    delete: deleteItemUseCase,
};
