import express from "express";

const PORT = 8000;
const app = express();

app.get("/", (req, res, next): void => {
  res.send("App is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
