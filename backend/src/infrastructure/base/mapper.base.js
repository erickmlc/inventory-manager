export class BaseMapper {
    constructor(EntityClass, ModelClass) {
        this.EntityClass = EntityClass;
        this.ModelClass = ModelClass;
    }

    persistenceToEntity(persistence) {
        return this.EntityClass.fromPersistence(persistence);
    }

    toEntity(model) {
        if (model == null) return null;
        return new this.EntityClass(model);
    }

    toModel(entity, schema) {
        if (entity == null) return null;
        return new this.ModelClass({
            id: entity.id ?? null,
            ...Object.fromEntries(
                Object.entries(entity.toPersistence())
                    .filter(([key]) => key !== 'id' && !key.startsWith('_'))
                    .map(([key, value]) => [key, value ?? null])
            )
        }, schema);
    }
}
