import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes.js";

dotenv.config();
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
const app = express();
app.use(cors({
    origin: FRONTEND_URL,
    credentials: true
}));
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

server.on("error", (err) => {
    console.error(`cannot start server: ${err.message}`);
    process.exit(1);
});