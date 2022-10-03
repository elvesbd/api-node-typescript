import express from 'express';
import { router } from './routes';
import { config } from 'dotenv';
config();

const server = express();

server.use(express.json());
server.use(router);

export { server };