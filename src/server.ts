import 'reflect-metadata';

import express from 'express';
import swaggerUi from "swagger-ui-express";

import "./database";

import "./shared/container";

import { router } from "./routes"
import swaggerFile from "./swagger.json";/usr/app/src///usr/app/src/modules/cars/repositories/implementations/CategoriesRepository.ts:19:45usr/app/src/modules/cars/repositories/implementations/CategoriesRepository.ts:19:45/usr/app/src/modules/cars/repositories/implementations/CategoriesRepository.ts:19:45odules/cars/repositories/implementations/CategoriesRepository.ts:19:45

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router)


app.listen(3333, () => console.log('Server Start!'));