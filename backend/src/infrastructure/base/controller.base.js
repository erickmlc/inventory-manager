import { sendResponse } from "#presentation/helpers/send-response.js";

export class BaseController {
    constructor(dtoFactory, useCaseFactory) {
        this.DTOs = dtoFactory;
        this.useCases = useCaseFactory;

        this.get = this.get.bind(this);
        this.list = this.list.bind(this);
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async create(req, res, context) {
        const { body } = context;

        const dto = this.DTOs.input.create(body);
        const result = await this.useCases.create.execute(dto);

        return this.#handleResponse(res, 201, result);
    }

    async delete(req, res, context) {
        const { params } = context;

        await this.useCases.delete.execute(params);

        return sendResponse(res, 204);
    }

    async list(req, res, context) {
        const { params } = context;

        const result = await this.useCases.list.execute(params);
        const dtoResponseList = result.length !== 0
            ? result.map(entity => this.DTOs.output.response(entity))
            : null;

        return sendResponse(res, 200, dtoResponseList);
    }

    async get(req, res, context) {
        const { params } = context;

        const result = await this.useCases.get.execute(params);

        return this.#handleResponse(res, 200, result);
    }

    async update(req, res, context) {
        const { body, params } = context;

        const dto = this.DTOs.input.update(body);
        const result = await this.useCases.update.execute(params, dto);

        return this.#handleResponse(res, 200, result);
    }

    #handleResponse(res, status, entity) {
        const dtoResponse = this.DTOs.output.response(entity);
        return sendResponse(res, status, dtoResponse);
    }
}