const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(200).json({ name: "Naraa" });
});

// app.get("/about", (req, res) => {
//   res.send("Hello ami");
// });
app.post("/", (req, res) => {
  res.send("Post request is successful");
});
app.put("/", (req, res) => {
  res.send("Put request is successful");
});
app.delete("/", (req, res) => {
  res.send("Delete request is successful");
});
app.listen(8000, () => {
  console.log("Server is runnig at localhost:8000");
});
