import express from 'express';
import router from './route/routes.js';
import cors from 'cors';
import { DBconnection } from './database/db.js';

const app= express();

app.use('/' ,router );
app.use(cors());

DBconnection();

const PORT = 8000;

app.listen(PORT , () => console.log("server is running on port 8000 "));