import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";



const carsRoutes = Router();

const createCarsController = new CreateCarController();

carsRoutes.post("/", 
ensureAuthenticadted,
ensureAdmin,
createCarsController.handle)

export { carsRoutes }

