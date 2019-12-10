const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
app.use("/public", express.static("public"));
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/Portfolio.html"));
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");
