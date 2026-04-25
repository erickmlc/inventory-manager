import en from "./languages/en.json" with { type: "json" };
import pt from "./languages/pt.json" with { type: "json" };
import { BaseLanguage } from "./BaseLanguage.js";

const SUPPORTED_LANGUAGES = { en, pt };

export class LanguageRegistry {

    static cache = {};

    static get(code) {
        const safeCode = SUPPORTED_LANGUAGES[code] ? code : "en";

        if (!this.cache[safeCode]) {
            this.cache[safeCode] = new BaseLanguage(
                SUPPORTED_LANGUAGES[safeCode],
                safeCode,
                SUPPORTED_LANGUAGES["en"]
            );
        }

        return this.cache[safeCode];
    }

    static load(code) {
        const languages = { pt, en };
        return languages[code];
    }
}
