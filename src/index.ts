import App from './server'
import { Request, Response } from 'express';
import  { Knex } from "knex";

import dotenv from 'dotenv';
dotenv.config();

import db from './database/databaseconnection'
const server: any = new App();
server.startServer();
console.log("===========", process.env.PORT);
