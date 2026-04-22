import { searchBooksService, typeAheadService } from "../service/search.service.js";
import type { Request, Response } from "express";

type searchBooksRequestBody = {
  query: string;
};

export const typeAhead = async (
  req: Request<{}, {}, {}, searchBooksRequestBody>,
  res: Response,
) => {
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

export const searchBooks = async (
  req: Request<{}, {}, {}, searchBooksRequestBody>,
  res: Response,
) => {
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
