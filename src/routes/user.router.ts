import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello this is testing for Express + Typescript. Type /info to navigate to user info page');
});

router.get('/info', (req: Request, res: Response) => {
    res.send('This is user page');
});

export default router;