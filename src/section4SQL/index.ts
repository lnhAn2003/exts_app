import express from 'express';
import tutorialRoutes from './routes/tutorial.routes';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', tutorialRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
