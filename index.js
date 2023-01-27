const  express = require("express");
const cors = require("cors");
const connect = require("./config/db")
const app = express();
const PORT = 8080
app.use(express.json());
app.use(cors());

app.get("/", (req, res)=>{
    return res.send("Hello Its me salem")
})

app.listen(PORT, async()=>{
    await connect();
    console.log("Listening to port 8080");

})