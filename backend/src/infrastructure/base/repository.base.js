import supabaseGateway from "#infrastructure/integrations/supabase/SupabaseGateway.js";

export class BaseRepository {
    constructor(tableName, mapper, schemas) {
        this.table = tableName;
        this.mapper = mapper;
        this.schemas = schemas;
    }

    async create(entity) {
        const model = this.mapper.toModel(entity, this.schemas.domain.create);
        delete model.id;
        const result = await supabaseGateway.insert(this.table, model);
        return this.#toEntity(result[0]);
    }

    async findAll(filters = {}) {
        const result = await supabaseGateway.select(this.table, filters);
        const entities = result.map(model => this.#toEntity(model));
        return entities.length !== 0 ? entities : null;
    }

    async findOne(filters = {}) {
        const result = await supabaseGateway.select(this.table, filters);
        return this.#toEntity(result[0]);
    }

    async update(filters = {}, entity) {
        const model = this.mapper.toModel(entity, this.schemas.domain.update);
        const result = await supabaseGateway.update(this.table, model, filters);
        return this.#toEntity(result[0]);
    }

    async remove(filters = {}) {
        const result = await supabaseGateway.remove(this.table, filters);
        return this.#toEntity(result[0]);
    }

    #toEntity(model) {
        return model ? this.mapper.persistenceToEntity(model) : null;
    }
}
