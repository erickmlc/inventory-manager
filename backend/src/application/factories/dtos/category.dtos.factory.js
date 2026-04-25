import { CreateCategoryDTO } from "#application/stock/dtos/category/input/CreateCategoryDTO.js";
import { UpdateCategoryDTO } from "#application/stock/dtos/category/input/UpdateCategoryDTO.js";
import { CategoryDTO } from "#application/stock/dtos/category/output/CategoryDTO.js";

export const categoryDTOs = {
    input: {
        create: data => new CreateCategoryDTO(data),
        update: data => new UpdateCategoryDTO(data)
    },
    output: {
        response: category => new CategoryDTO({
            id: category.id,
            name: category.name,
            description: category.description
        })
    }
};
