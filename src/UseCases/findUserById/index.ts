import { UsersPostgresRepository } from "../../repositories/IUsersRepositories";
import { FindUserByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

const usersRepository = new UsersPostgresRepository();
const findUserByIdUseCase = new FindUserByIdUseCase(usersRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export {findUserByIdController};