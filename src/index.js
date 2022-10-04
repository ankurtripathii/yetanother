const express = require("express");
const app = express();
const dotenv = require("dotenv").config;
const cors = require("cors");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes")
const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://ankktripathi:google3123@cluster0.ugxqjpx.mongodb.net/notespp_db?retryWrites=true&w=majority";
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/note", noteRouter)
app.get("/ ", (req,res)=>{
    res.send("Note API From Ankur Tripathi");
})
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;
mongoose.connect(MONGO_URL).then(()=>{
    app.listen(PORT, ()=>{Y
        console.log("Server started port no." +PORT);
});

}).catch((error)=>{
    console.log(error);
})