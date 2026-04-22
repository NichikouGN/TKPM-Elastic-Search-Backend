import { searchBooksService, typeAheadService } from "../service/search.service.js";
export const typeAhead = async (req, res) => {
    if (!req.query) {
        return res.json({ typeAhead: [] });
    }
    const searchQuery = req.query.query;
    if (!searchQuery) {
        return res.json({ typeAhead: [] });
    }
    const result = await typeAheadService(searchQuery.trim());
    res.json({ typeAhead: result });
};
export const searchBooks = async (req, res) => {
    if (!req.query) {
        return res.send("none");
    }
    const searchQuery = req.query.query;
    if (!searchQuery) {
        return res.send("None");
    }
    const result = await searchBooksService(searchQuery.trim());
    res.json({ typeAhead: result });
};
//# sourceMappingURL=home.controllers.js.map