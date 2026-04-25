import { I18n } from "#infrastructure/i18n/I18n.js";

export function languageMiddleware(req, res, context, next) {
    const supported = ["pt", "en"];
    const header = req.headers["accept-language"];

    let lang = "en";

    if (header != null && header.length !== 0) {
        const parsed = header
            .split(",")
            .map(item => {
                const [langPart, qPart] = item.trim().split(";");
                const baseLang = langPart.toLowerCase().split("-")[0];

                return {
                    lang: baseLang,
                    q: qPart ? parseFloat(qPart.split("=")[1]) : 1
                };
            })
            .sort((a, b) => b.q - a.q);

        const matched = parsed.find(item => supported.includes(item.lang));
        lang = matched ? matched.lang : "en";
    }

    context.lang = lang;
    context.i18n = new I18n(lang);

    return next();
}