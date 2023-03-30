import homeRoutes from "./home.routes.js";
// Index file of all routes
export default function (app) {
  app.use("/", homeRoutes);
}
