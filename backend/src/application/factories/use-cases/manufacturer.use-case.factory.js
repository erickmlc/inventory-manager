import createManufacturerUseCase from "#application/stock/use-cases/manufacturer/create-manufacturer.use-case.js";
import listManufacturerUseCase from "#application/stock/use-cases/manufacturer/list-manufacturer.use-case.js";
import getManufacturerUseCase from "#application/stock/use-cases/manufacturer/get-manufacturer.use-case.js";
import updateManufacturerUseCase from "#application/stock/use-cases/manufacturer/update-manufacturer.use-case.js";
import deleteManufacturerUseCase from "#application/stock/use-cases/manufacturer/delete-manufacturer.use-case.js";

export const manufacturerUseCases = {
    create: createManufacturerUseCase,
    list: listManufacturerUseCase,
    get: getManufacturerUseCase,
    update: updateManufacturerUseCase,
    delete: deleteManufacturerUseCase,
};
