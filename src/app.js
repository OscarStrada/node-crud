import express from "express";
import { create } from "express-handlebars";
import routes from "./routes/index.routes";
import path from "path";

const app = express();

// settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

// handlebars
const exphbs = create({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  defaultLayout: "main",
});

app.engine(".hbs", exphbs.engine);
app.set("view engine", ".hbs");

// routes
app.use(routes);

export default app;
