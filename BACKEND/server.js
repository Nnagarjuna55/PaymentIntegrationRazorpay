import { app } from "./app.js";
import Razorpay from "razorpay";
import { connectDB } from "./config/database.js";

// Connect to the database
connectDB();

export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT}`)
);

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Promise Rejection:', reason);
  // Optionally exit the process with a non-zero code
  process.exit(1);
});
