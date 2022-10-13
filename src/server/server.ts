import express from 'express';
import { config } from 'dotenv';
import '../shared/services/translations-yup';
import { router } from './routes';
config();

const server = express();

server.use(express.json());
server.use(router);

export { server };