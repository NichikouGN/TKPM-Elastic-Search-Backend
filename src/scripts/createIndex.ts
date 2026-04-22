import { es } from "../config/elastic.js";

const createIndex = async () => {
  const exists = await es.indices.exists({ index: "books" });

  if (exists) {
    console.log("Removing existing index");
    await es.indices.delete({ index: "books" });
  }

  await es.indices.create({
    index: "books",
    settings: {
      analysis: {
        filter: {
          autocomplete_filter: {
            type: "edge_ngram",
            min_gram: 1,
            max_gram: 20,
          },
        },
        analyzer: {
          autocomplete: {
            type: "custom",
            tokenizer: "standard",
            filter: ["lowercase", "autocomplete_filter"],
          },
        },
      },
    },
    mappings: {
      properties: {
        title: { type: "text", analyzer: "standard" },
        content: { type: "text", analyzer: "standard" },
        title_suggest: { type: "text", analyzer: "autocomplete", search_analyzer: "standard" },
      },
    },
  });

  console.log("Index created");
};

createIndex();
