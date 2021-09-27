
import { CreateSpecificationController } from "@modules/cars/useCases/createSpecification/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";


const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();
const listSpecificationCcontroller = new ListSpecificationsController();


//specificationsRoutes.use(ensureAuthenticadted);
specificationsRoutes.post("/", 
ensureAuthenticadted,
ensureAdmin,
createSpecificationController.handle);


 specificationsRoutes.get("/", listSpecificationCcontroller.handle);

export { specificationsRoutes };
