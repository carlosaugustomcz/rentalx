
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { Router } from "express";
import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationCcontroller = new ListSpecificationsController();


specificationsRoutes.use(ensureAuthenticadted);
specificationsRoutes.post("/", createSpecificationController.handle);


 specificationsRoutes.get("/", listSpecificationCcontroller.handle);

export { specificationsRoutes };
