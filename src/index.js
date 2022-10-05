const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes")
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
app.use("/users", userRouter);
app.use("/note", noteRouter)
app.get("/", (req,res)=>{
    res.send("Note API From Ankur Tripathi");
});
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started port no." +PORT);
});

})
.catch((error)=>{
    console.log(error);
});