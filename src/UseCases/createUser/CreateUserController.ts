import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";


class CreateUserController{

    constructor(
        private createUserUseCase: CreateUserUseCase
    ){}

    async handle(request: Request, response: Response){
        const { email, name} = request.body;

        await this.createUserUseCase.execute({name, email});

        return response.send();
    }

}

export {CreateUserController};