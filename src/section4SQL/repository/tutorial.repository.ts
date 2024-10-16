import connection from "../database";
import { Tutorial } from "../models/tutorial.model";

class TutorialRepository {
    async create(tutorial: Tutorial): Promise<number> {
      const query = 'Insert into tutorials (title, description, published) values (?, ?, ?)';
      const [result] = await connection.execute(query,
        [tutorial.title, tutorial.description, tutorial.published]
      );
      return (result as any).insertId;
    }

    async findAll(): Promise<Tutorial[]>{
      const [rows] = await connection.execute('Select * from tutorials');
      return rows as Tutorial[];
    }

    async findById(id: number): Promise<Tutorial | undefined> {
      const [rows] = await connection.execute(`Select * from tutorials where id = ? `, [id]);
      if ((rows as Tutorial[]).length > 0) {
        return (rows as Tutorial[])[0];
      }
      return undefined;
    }

    async update(id: number, tutorial: Partial<Tutorial>): Promise<number>{
      const query = 'Update tutorials set title = ?, description = ?, published = ? where id = ?';
      const [result] = await connection.execute(query, [
        tutorial.title,
        tutorial.description,
        tutorial.published,
        id
      ]);
      return (result as any).affectedRows;
    }

    async delete(id: number): Promise<number> {
      const query = 'Delete from tutorials where id = ?';
      const [result] = await connection.execute(query, [id]);
      return (result as any).affectedRows;
    }
}

export default new TutorialRepository();