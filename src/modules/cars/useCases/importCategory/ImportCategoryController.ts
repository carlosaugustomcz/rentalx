import { Request, Response } from "express";

import { container } from "tsyringe";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController {

    handle(request: Request, response: Response): Response {

        const { file } = request;

        if (!file) {
            return response.json({message: "File not found!"});
        }

        const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

        importCategoryUseCase.execute(file);

        return response.json({message: "success"});

    }

}

export { ImportCategoryController }; 