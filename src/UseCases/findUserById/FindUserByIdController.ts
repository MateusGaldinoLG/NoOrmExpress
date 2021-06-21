import { Request, Response } from "express";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";


class FindUserByIdController{

    constructor(private findUserByIdUseCase: FindUserByIdUseCase){}

    async handle(req: Request, res: Response){
        const { id } = req.params;
        const user = await this.findUserByIdUseCase.execute(id);

        return res.json(user);
    }
    

}

export {FindUserByIdController};