import mysql from 'mysql2/promise';

const connection = mysql.createPool({
  host: 'localhost',
  user: 'lnhan_intern',    
  password: 'Phuong@n2011', 
  database: 'tutorialDB',  
});

export default connection;
