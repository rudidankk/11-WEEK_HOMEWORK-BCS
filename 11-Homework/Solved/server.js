const express = require("express");
const htmlRoutes = require("./public/assets/js/htmlRoute");
const apiRoutes = require("./public/assets/js/apiRoute");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,()=> console.log(`Listening on PORT : ${PORT}`));