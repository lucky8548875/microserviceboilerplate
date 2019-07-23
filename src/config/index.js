import dotenv from 'dotenv'
dotenv.config();

const BASE_URL = process.env.BASE_URL

const config = {
    url: `${BASE_URL}`,
    mongoDB:  process.env.MONGO_DB || `mongodb://localhost/subscription`,
    useNewUrlParser:  process.env.MONGO_DB || true
}

module.exports = config; 