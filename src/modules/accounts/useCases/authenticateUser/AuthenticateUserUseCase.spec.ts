import "reflect-metadata";
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";



let autenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Autenticate User", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory();
        autenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryInMemory);
        createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    });

    it("should be able to autenticate an user", async () => {

        const user: ICreateUserDTO = {
            name: "Teste User",
            driver_lincense: "12345",
            email: "teste@teste.com",
            password: "1234"
        }

        await createUserUseCase.execute(user);

        const result = await autenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        });

        expect(result).toHaveProperty("token");

    });

    it("should not be able to autenticate an nonexists user", async () => {
        const user: ICreateUserDTO = {
            name: "Teste User",
            driver_lincense: "12345",
            email: "teste@teste.com",
            password: "1234"
        };

        await createUserUseCase.execute(user);

        await expect(autenticateUserUseCase.execute({
                email: "testeerrado@teste.com",
                password: user.password
            })
        ).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to autenticate with incorrect password", async () => {
        const user: ICreateUserDTO = {
            name: "Teste User",
            driver_lincense: "12345",
            email: "teste@teste.com",
            password: "12345"
        }

        await createUserUseCase.execute(user);

        await expect(
            autenticateUserUseCase.execute({
                email: user.email,
                password: "1234"
            })
        ).rejects.toBeInstanceOf(AppError);
    })

});