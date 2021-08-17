import { Router } from "express";

import { CreateSpecificationController } from "../modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "../modules/cars/useCases/listSpecifications/ListSpecificationsController";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationCcontroller = new ListSpecificationsController();

specificationsRoutes.post("/", createSpecificationController.handle);


 specificationsRoutes.get("/", listSpecificationCcontroller.handle);

export { specificationsRoutes };
