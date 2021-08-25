import { Router } from "express";
import multer from "multer";

import { CreateCategoryController } from "../modules/cars/useCases/createCategory/CreateCategoryController";

import { ListCategoriesController } from "../modules/cars/useCases/listCategories/ListCategoriesController";

import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";
import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();
const listaCategoriesController = new ListCategoriesController();
const importCategoryController = new ImportCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", ensureAuthenticadted,  listaCategoriesController.handle);

categoriesRoutes.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }; 
