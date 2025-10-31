import dotenv from 'dotenv'
dotenv.config()


export default {
    port : process.env.PORT,
    DatabaseURL : process.env.DATABASE_URL
}