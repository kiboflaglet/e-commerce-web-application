import cors from "cors";
import express, { Response } from "express";

const app = express();
const PORT = 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.get("/health", (_, res: Response) => {
    res.send("working")
})


app.listen(PORT, () => {
  console.log(`App runs in http://localhost:${PORT}`);
});