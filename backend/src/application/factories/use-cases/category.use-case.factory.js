import createCategoryUseCase from "#application/stock/use-cases/category/create-category.use-case.js";
import listCategoryUseCase from "#application/stock/use-cases/category/list-category.use-case.js";
import getCategoryUseCase from "#application/stock/use-cases/category/get-category.use-case.js";
import updateCategoryUseCase from "#application/stock/use-cases/category/update-category.use-case.js";
import deleteCategoryUseCase from "#application/stock/use-cases/category/delete-category.use-case.js";

export const categoryUseCases = {
    create: createCategoryUseCase,
    list: listCategoryUseCase,
    get: getCategoryUseCase,
    update: updateCategoryUseCase,
    delete: deleteCategoryUseCase,
};
