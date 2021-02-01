import express from 'express';
import Users from './controllers/UserController';

const routes = express.Router()

routes.get('/', Users.index);

export default routes;