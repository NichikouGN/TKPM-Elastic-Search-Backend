import { es } from "../config/elastic.js";
export const typeAheadService = async (query) => {
    const result = await es.search({
        index: "books",
        size: 5,
        query: {
            bool: {
                should: [
                    {
                        match: {
                            title_suggest: {
                                query,
                                fuzziness: "AUTO",
                                operator: "AND",
                                boost: 1,
                            },
                        },
                    },
                    {
                        match_phrase_prefix: {
                            title_suggest: {
                                query,
                                boost: 2,
                            },
                        },
                    },
                ],
            },
        },
    });
    return result.hits.hits.map((hit) => hit._source);
};
export const searchBooksService = async (query) => {
    const result = await es.search({
        index: "books",
        query: {
            match_phrase_prefix: {
                title: query,
            },
        },
    });
    return result.hits.hits.map((hit) => hit._source);
};
//# sourceMappingURL=search.service.js.map