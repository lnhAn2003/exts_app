//import package and library
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

//Import Router
import userRouter from './routes/user.router';;

//set up environment
dotenv.config();
const app = express();
const port = process.env.PORT;
 
//middleware
app.use(express.json());
app.use('/user', userRouter);

//default index page
app.get('/', ( req: Request, res: Response ) => {
  res.send('Hello. Type /user to navigated to user page')
})

//set up server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
