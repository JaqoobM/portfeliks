import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import routers from './routers/router.js';
import mongoose from './db/mongoose.js';
import cors from 'cors';
import connectDB from './db/mongoose.js';

connectDB()
app.use(cors());
app.use(bodyParser.json());
app.use('/', routers);

export default app;
