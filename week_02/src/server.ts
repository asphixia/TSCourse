import express, { Express, Request, Response , Application } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import log4js from 'log4js';
import axios from 'axios';
import { notFound, errorHandler } from './error';

//For env File 
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;
const JSON_SERVER_URL = 'http://localhost:3000/persons';

// Middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

//get all persons
app.get('/persons', async (req: Request, res: Response) => {
    try {
      const response = await axios.get(JSON_SERVER_URL);
      res.json(response.data);
    } catch (error) {
      res.status(500).send('Error fetching persons');
    }
  });

//get person by id
app.get('/persons/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching person');
  }
});

//add new person
app.post('/persons', async (req: Request, res: Response) => {
  try {
    const response = await axios.post(JSON_SERVER_URL, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error adding person');
  }
});

//update person
app.put('/persons/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.put(`${JSON_SERVER_URL}/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error updating person');
  }
});

//delete person
app.delete('/persons/:id', async (req: Request, res: Response) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_URL}/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error deleting person');
  }
});

   // Error Handling
   app.use(notFound);
   app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});