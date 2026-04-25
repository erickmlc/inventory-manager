import createLocationUseCase from "#application/stock/use-cases/location/create-location.use-case.js";
import listLocationUseCase from "#application/stock/use-cases/location/list-location.use-case.js";
import getLocationUseCase from "#application/stock/use-cases/location/get-location.use-case.js";
import updateLocationUseCase from "#application/stock/use-cases/location/update-location.use-case.js";
import deleteLocationUseCase from "#application/stock/use-cases/location/delete-location.use-case.js";

export const locationUseCases = {
    create: createLocationUseCase,
    list: listLocationUseCase,
    get: getLocationUseCase,
    update: updateLocationUseCase,
    delete: deleteLocationUseCase,
};
