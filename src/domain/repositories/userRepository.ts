import { Knex } from "knex";
import { User } from '../entites/userEntites'
import db from '../../database/databaseconnection'

export class UserRepository {
    private readonly db: Knex;

    constructor(db: Knex) {
        this.db = db;
    }

    async create(user: User): Promise<User> {
        // await db.schema.createTable('authUsers', (table) => {
        //     table.increments('id');
        //     table.string('username').notNullable();
        //     table.string('fname');
        //     table.string('lname');
        //     table.string('password');
        //     table.string('email');
        //   });
        //   console.log('Table "users" created successfully');
        const [newUser] = await this.db('authUsers').insert(user).returning('*');
        console.log("==========" , newUser);
        
        return newUser;
    }


    async findByEmail(email: string): Promise<User | null> {
        const [user] = await this.db('authUsers').select().where({ email });
        return user;
    }

}