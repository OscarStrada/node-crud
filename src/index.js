import express from "express";

// settings
const app = express();
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
