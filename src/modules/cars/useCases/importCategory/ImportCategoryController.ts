import { request, response } from "express";

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";


class ImportCategoryController {

    constructor (private importCategoryUseCase: ImportCategoryUseCase){}



    handle(request: Request, response: Response): Response {

        const { file } = request;

        this.importCategoryUseCase.execute(file);

        return response.json({message: "success"});

    }


}

export { ImportCategoryController }; 