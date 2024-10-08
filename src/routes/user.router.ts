//import package and library
import { Router, Request, Response } from 'express';

//declare variable, const
const router = Router();

//set up router
router.get('/', (req: Request, res: Response) => {
    res.send('Hello this is testing for Express + Typescript. Type /info to navigate to user info page');
});

router.get('/info', (req: Request, res: Response) => {
    res.send('This is user info page');
});

export default router;