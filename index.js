const express = require("express");
const fileRouter = require("./Routers/date.router")


const app = express();

app.use(express.json());
app.use(fileRouter);


app.listen(4002,() => {
    console.log("app to create file started"); 
    console.log(Date.now(),new Date());
})