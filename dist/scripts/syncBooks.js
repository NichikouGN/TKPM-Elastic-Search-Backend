import { db } from "../config/db.js";
import { es } from "../config/elastic.js";
const syncBooks = async () => {
    const books = await db("books").select("*");
    for (const book of books) {
        await es.index({
            index: "books",
            id: book.id,
            document: {
                id: book.id,
                title: book.title,
                author: book.author,
                content: book.content,
                title_suggest: book.title,
            },
        });
    }
    console.log("Synced books to ElasticSearch");
};
syncBooks();
//# sourceMappingURL=syncBooks.js.map