import { LanguageRegistry } from "./LanguageRegistry.js";

export class I18n {
    constructor(lang = "en") {
        this.langCode = lang;
        this.lang = LanguageRegistry.get(lang);
    }

    tError(key, variables = {}) {
        return this.lang.translate(`errors.${key}`, variables);
    }

    tResource(key, variables = {}) {
        return this.lang.translate(`resources.${key}`, variables);
    }

    t(path, variables = {}) {
        return this.lang.translate(path, variables);
    }
}
