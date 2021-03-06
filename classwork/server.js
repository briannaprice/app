const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const ipMiddleware = require("./server/middleware/logging.middleware");
const userRoutes = require("./server/routes/user.routes");

app.use(ipMiddleware);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/dist/todoApp"));

app.use("/api/users", userRoutes)

app.get('*',  (req, res) => 
      res.sendFile('/dist/todoApp/index.html', {root: __dirname + "/"}) 
);

app.listen(port, ()=> console.log(`Listening on port: ${port}`))