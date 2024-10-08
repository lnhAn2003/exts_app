import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

//Import Router
import userRouter from './routes/user.router';;

dotenv.config();
const app = express();
const port = process.env.PORT; 
app.use(express.json());

app.use('/user', userRouter);

app.get('/', ( req: Request, res: Response ) => {
  res.send('Hello. Type /user to navigated to user page')
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
