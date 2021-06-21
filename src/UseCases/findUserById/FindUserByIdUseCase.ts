import { IUsersRepositories } from "../../repositories/implementations/UsersPostgresRepositories";


export class FindUserByIdUseCase{
    constructor(private usersRepository: IUsersRepositories){}

    async execute(id: string){
        const user = await this.usersRepository.findById(id);
        return user;
    }
}
