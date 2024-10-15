import { Request, Response } from 'express';
import TutorialRepository from '../repository/tutorial.repository';

class TutorialController {
  async create(req: Request, res: Response) {
    try {
      const { title, description, published } = req.body;
      const insertId = await TutorialRepository.create({ title, description, published });
      res.status(201).json({ message: 'Tutorial created', id: insertId });
    } catch (error) {
      res.status(500).json({ message: 'Error creating tutorial', error });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const tutorials = await TutorialRepository.findAll();
      res.status(200).json(tutorials);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tutorials', error });
    }
  }

  async findById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const tutorial = await TutorialRepository.findById(parseInt(id));
      if (tutorial) {
        res.status(200).json(tutorial);
      } else {
        res.status(404).json({ message: 'Tutorial not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving tutorial', error });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, description, published } = req.body;
      const updatedRows = await TutorialRepository.update(parseInt(id), { title, description, published });
      if (updatedRows > 0) {
        res.status(200).json({ message: 'Tutorial updated' });
      } else {
        res.status(404).json({ message: 'Tutorial not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating tutorial', error });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedRows = await TutorialRepository.delete(parseInt(id));
      if (deletedRows > 0) {
        res.status(200).json({ message: 'Tutorial deleted' });
      } else {
        res.status(404).json({ message: 'Tutorial not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting tutorial', error });
    }
  }
}

export default new TutorialController();
