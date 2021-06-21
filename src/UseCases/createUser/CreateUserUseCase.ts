import { User } from "../../entities/user";
import { IUsersRepositories } from "../../repositories/implementations/UsersPostgresRepositories";

interface CreateUserDTO{
    name: string;
    email: string;
}

class CreateUserUseCase{
    constructor(private usersRepository: IUsersRepositories){}
    async execute({name, email}: CreateUserDTO){
        let user = new User();
        user = Object.assign({
            ...user,
            name,
            email
        }) //user object 

        await this.usersRepository.create(user);
    }
}

export {CreateUserUseCase};