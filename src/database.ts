import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

// console.log(process.env)

if(!process.env.DATABASE_URL){
    throw new Error ('DATABASE_URL not found.')
}

export const config: Knex.Config = {
    client: env.DATABASE_CLIENT,
    connection: env.DATABASE_CLIENT === 'sqlite' 
    ?   {
            filename: env.DATABASE_URL,
        } 
    : env.DATABASE_URL,
    useNullAsDefault: true, //por padrão o valor é nulo
    migrations: {
        extension: 'ts',
        directory: './db/migrations',
    },
}

export const knex = setupKnex(config)