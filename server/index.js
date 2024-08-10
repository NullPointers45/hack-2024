const cors = require("cors")
const express = require("express");
const mongoose= require("mongoose");
const env = require("dotenv");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const farmerrouter = require("./routes/farmerRoutes");
const croprouter = require("./routes/cropRoute");

env.config();

const app= express();

app.use(cors());
app.use(express.json());

app.use("/farmer",farmerrouter)
app.use("/crop",croprouter)


mongoose.connect(
    process.env.MONGO_URL,
    // {
    //     useNewUrlParser : true ,
    //     useUnifiedTopology : true
    // }
)
.then(()=>{
    console.log("DB connected");
    app.listen(process.env.PORT ,(req,res)=>{
        console.log("Server is running on port "+process.env.PORT);
    })
})
.catch(err=>{console.log(err)})

app.use(cookieParser())

app.use('/',authRouter);