import { NotFoundError } from "#domain/shared/errors/http/NotFoundError.js";

export async function validateExistsByFilters(repository, filters) {
    const record = await repository.findOne(filters);

    if (record == null) {
        throw new NotFoundError();
    }

    return record;
}
