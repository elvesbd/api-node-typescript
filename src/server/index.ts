import express from 'express';
import { config } from 'dotenv';
import '../shared/services/translations-yup';
import { route } from './routes';
config();

const server = express();

server.use(express.json());
server.use(route);

export { server };