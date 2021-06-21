import { User } from "../../entities/user";

interface IUsersRepositories{
    create(user: User): Promise<void>;
    findById(id: string): Promise<User | null>;
}

export { IUsersRepositories};