console.log("Payment service running...");

// Simulate a simple API endpoint (optional)
import express from "express";
const app = express();

app.get("/health", (req, res) => {
  res.json({ status: "payment-service OK" });
});

app.listen(3002, () => {
  console.log("Payment service running on port 3002");
});
