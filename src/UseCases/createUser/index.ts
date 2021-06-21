import { UsersPostgresRepository } from "../../repositories/IUsersRepositories";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const usersRepository = new UsersPostgresRepository;

const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

export {createUserController};

