import { es } from "../config/elastic.js";

export const searchBooks = async (query: string) => {
  const result = await es.search({
    index: "books",
    query: {
      multi_match: {
        query,
        fields: ["title", "content"],
      },
    },
  });

  return result.hits.hits.map((hit) => hit._source);
};
