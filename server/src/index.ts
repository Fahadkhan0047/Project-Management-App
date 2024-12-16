import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

// ROUTE IMPORTS
import projectRoutes from "./routes/projectRoutes";
import tasksRoutes from "./routes/taskRoutes";
import searchRoutes from "./routes/searchRoutes"
import { getUsers } from "./controllers/userController";
import { getTeams } from "./controllers/teamController";

// / CONFIGURATIONS
dotenv.config();
const port = process.env.PORT || 3000
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// // CORS Configuration
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

// Routes
app.get("/", (req, res) => {
  res.send("This is the home route");
});

app.use("/projects", projectRoutes);
app.use("/tasks", tasksRoutes);
app.use("/search",searchRoutes)
app.use("/users",getUsers)
app.use("/teams",getTeams)

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});