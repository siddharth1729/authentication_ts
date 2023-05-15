import { Client } from "pg";
import knex from "knex";
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    connectionString:process.env.DATABASE_URL,
  });
  
  const connectionToLocalDatabase  = knex({
    client: 'cockroachdb',
    connection: process.env.DATABASE_URL,
    searchPath: ['knex', 'public'],
  });
  
  export default connectionToLocalDatabase;
  

