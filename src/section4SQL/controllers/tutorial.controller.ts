import { Request, Response } from "express";
import TutorialRepository from "../repository/tutorial.repository";

class TutorialController {
  async create(req: Request, res: Response) {
    try{
      const { title, description, published } = req.body;
      const insertId = await TutorialRepository.create({ title, description, published});
      res.status(201).json({ message: 'Tutorials created', id: insertId });
    } catch (err){
      res.status(500).json({ message: 'Error creating tutorials', err});
    }
  }

  async findAll(req: Request, res: Response) {
    try{
      const tutorials = await TutorialRepository.findAll();
      res.status(201).json(tutorials);
    } catch (err) {
      res.status(500).json({ message: 'Error find all tutorials', err});
    }
  }

  async findById(req: Request, res: Response) {
    try{
      const {id} = req.params;
      const findId = await TutorialRepository.findById(parseInt(id));
      if (findId){
        res.status(201).json(findId);
      } else {
        res.status(404).json({ message: 'Tutorial not found'});
      }
    } catch (err) {
      res.status(500).json({ message: 'Error find id tutorials', err});
    }
  }

  async update(req: Request, res: Response) {
    try{
      const {id} = req.params;
      const { title, description, published } = req.body;
      const updateId = await TutorialRepository.update(parseInt(id), {title, description, published});
      if (updateId > 0) {
        res.status(201).json({message: 'Tutorial updated !'});
      } else {
        res.status(404).json({message: 'Tutorial not found !'});
      };
    } catch (err) {
      res.status(500).json({message: 'Cant updated!(500)', err});
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const {id} = req.params;
      const deleteId = await TutorialRepository.delete(parseInt(id));
      if (deleteId > 0){
        res.status(201).json({message: 'Tutorial Deleted !'});
      } else {
        res.status(404).json({message: 'Tutorial not found!'});
      }
    } catch (err) {
      res.status(500).json({message: 'Cant deleted!(500)'});
    }
  }
}

export default new TutorialController();