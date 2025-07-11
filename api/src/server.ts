import mongoose from 'mongoose';
import app from './app'; // Import the configured app from app.ts

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const start = async () => {
  if (!MONGO_URI) {
    throw new Error('MONGO_URI must be defined in your .env.dev file');
  }

  try {
    // 1. Connect to the database
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB Connected successfully.');

    // 2. Start the Express server listening for requests
    app.listen(PORT, () => {
      console.log(`🚀 API Server running on port ${PORT}`);
      console.log(`🚀 GraphQL endpoint at http://localhost:${PORT}/graphql`);
    });

  } catch (error) {
    console.error('❌ Failed to start server', error);
    process.exit(1);
  }
};

// Execute the start function
start();