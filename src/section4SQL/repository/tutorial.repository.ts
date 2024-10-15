import connection from '../database';
import { Tutorial } from '../models/tutorial.model';

class TutorialRepository {
  async create(tutorial: Tutorial): Promise<number> {
    const query = 'INSERT INTO tutorials (title, description, published) VALUES (?, ?, ?)';
    const [result] = await connection.execute(query, [
      tutorial.title,
      tutorial.description,
      tutorial.published,
    ]);
    return (result as any).insertId;
  }

  async findAll(): Promise<Tutorial[]> {
    const [rows] = await connection.execute('SELECT * FROM tutorials');
    return rows as Tutorial[];
  }

  async findById(id: number): Promise<Tutorial | undefined> {
    const [rows] = await connection.execute('SELECT * FROM tutorials WHERE id = ?', [id]);
    if ((rows as Tutorial[]).length > 0) {
      return (rows as Tutorial[])[0];
    }
    return undefined;
  }

  async update(id: number, tutorial: Partial<Tutorial>): Promise<number> {
    const query = 'UPDATE tutorials SET title = ?, description = ?, published = ? WHERE id = ?';
    const [result] = await connection.execute(query, [
      tutorial.title,
      tutorial.description,
      tutorial.published,
      id,
    ]);
    return (result as any).affectedRows;
  }

  async delete(id: number): Promise<number> {
    const query = 'DELETE FROM tutorials WHERE id = ?';
    const [result] = await connection.execute(query, [id]);
    return (result as any).affectedRows;
  }
}

export default new TutorialRepository();
