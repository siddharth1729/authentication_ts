
import { User } from '../../domain/entites/userEntites';
import { UserRepository } from '../../domain/repositories/userRepository';

export class UserService {
    constructor(private userRepository: UserRepository) { }

    async signUpUser(fname: string, lname: string, username: string, email: string, password: string): Promise<User> {
        const existingUser = await this.userRepository.findByEmail(email);
        if (existingUser) {
            throw new Error('User with this email already exists');
        }
            
        const user: User = {
            fname,
            lname,
            email,
            username,
            password,
        };

        const newuser = await this.userRepository.create(user);
        return newuser;
    }
}