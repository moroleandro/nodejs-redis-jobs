import 'dotenv/config';
import express from 'express';
import UserController from './app/controllers/UserController';

const app = express();

app.post('/users', UserController.store);

app.listen(3000, () => {
    console.log('Server Running port 3000');
})