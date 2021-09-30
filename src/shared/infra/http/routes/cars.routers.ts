import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticadted } from "../middlewares/ensureAuthenticated";



const carsRoutes = Router();

const createCarsController = new CreateCarController();
const listAvailableCarController = new ListAvailableCarsController();

carsRoutes.post("/", 
ensureAuthenticadted,
ensureAdmin,
createCarsController.handle);

carsRoutes.get("/available", listAvailableCarController.handle)

export { carsRoutes }

