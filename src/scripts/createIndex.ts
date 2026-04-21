import { es } from "../config/elastic.js";

const createIndex = async () => {
  const exists = await es.indices.exists({ index: "books" });

  if (exists) {
    console.log("Removing existing index");
    await es.indices.delete({ index: "books" });
  }

  await es.indices.create({
    index: "books",
    mappings: {
      properties: {
        title: { type: "text" },
        author: { type: "keyword" },
        content: { type: "text" },
      },
    },
  });

  console.log("Index created");
};

createIndex();
