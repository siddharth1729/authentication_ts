import { Client } from "pg";
import knex from "knex";
import dotenv from 'dotenv';
dotenv.config();

const client = new Client({
    connectionString:"postgresql://siddharth:-WAIbtJCzvMKkle-_u-CIQ@solid-poodle-2991.7s5.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full",
  });
  
  const connectionToLocalDatabase  = knex({
    client: 'cockroachdb',
    connection: process.env.DATABASE_URL,
    searchPath: ['knex', 'public'],
  });
  
  export default connectionToLocalDatabase;
  

