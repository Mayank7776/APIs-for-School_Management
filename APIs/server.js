import 'dotenv/config';
dotenv.config();
import { app } from './src/app.js';
import { db } from './src/config/db.js';

async function start() {
  try {
    // Run a simple query to test connection
    await db.query('SELECT 1');
    console.log("DB connected");

    // Start your server here, e.g.
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server started on port http://localhost:${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

start();

