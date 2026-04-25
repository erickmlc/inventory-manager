const PLURAL_KEYS = new Set(["zero", "one", "two", "few", "many", "other"]);

export class BaseLanguage {
    constructor(translations, code, fallbackTranslations = null) {
        this.translations = translations;
        this.code = code;
        this.fallbackTranslations = fallbackTranslations;
        this.pluralRules = new Intl.PluralRules(code);
    }

    translate(path, variables = {}) {
        let value = this.getValue(path, this.translations);

        if (value == null && this.fallbackTranslations) {
            value = this.getValue(path, this.fallbackTranslations);
        }

        if (value == null) return path;

        const isPluralObject =
            typeof value === "object" &&
            Object.keys(value).some(k => PLURAL_KEYS.has(k));

        if (typeof value === "object" && variables.count && isPluralObject) {
            const count = Number(variables.count);
            const rule = this.pluralRules.select(count);
            const template = value[rule] ?? value.other;

            return this.interpolate(template, { ...variables, count });
        }

        if (typeof value === "object") return path;

        return this.interpolate(value, variables);
    }

    getValue(path, source) {
        return path.split(".").reduce((obj, key) => obj?.[key], source);
    }

    interpolate(template, variables) {
        if (typeof template !== "string") return template;

        return template.replace(/\{\{(.*?)\}\}/g, (_, k) => {
            const key = k.trim();
            return key in variables ? variables[key] : `{{${key}}}`;
        });
    }
}
