import type { Request, Response } from "express";
type searchBooksRequestBody = {
    query: string;
};
export declare const typeAhead: (req: Request<{}, {}, {}, searchBooksRequestBody>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const searchBooks: (req: Request<{}, {}, {}, searchBooksRequestBody>, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export {};
//# sourceMappingURL=home.controllers.d.ts.map