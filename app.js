import express from "express";
import serverConfig from "./app-config/index.js";
import serverErrorHandeling from "./error-handling/index.js";
import { config } from "dotenv";
import "./db-config/index.js";
import routes from "./app-routes/index.js";

// Gets access to environment variables/settings
config();

//HTTP Server, handles http requests
const app = express();

//Server configuration middlewares.
serverConfig(app);

//Server Routes
routes(app);

//Server res/req error handling middleware.
serverErrorHandeling(app);

export default app;
