import { Request, Response } from 'express';
import { UserService } from '../../usecase/auth/signupUsecases';
import { UserRepository } from '../../domain/repositories/userRepository';

export class UserController {
    constructor(private userService: UserService) { }

    async signUp(req: Request, res: Response) {
        try {
            const { fname, lname, username, email, password } = req.body;
            const x = await this.userService.signUpUser(fname, lname, username, email, password);
            res.status(201).send(x);
        } catch (error) {
            console.log("==========,", error);

            res.status(400).json({ error: error });
        }
    }
}
