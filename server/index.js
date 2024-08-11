const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const farmerrouter = require("./routes/farmerRoutes");
const croprouter = require("./routes/cropRoute");
const buyerrouter = require("./routes/buyerRoutes");
const bidrouter = require("./routes/bidRoutes");
// const farmerRouter = require("./routes/farmerRoutes");
// const cropRouter = require("./routes/cropRoute");
// const stripeRouter = require("./routes/stripeRoutes"); // Import Stripe routes
// require('dotenv').config();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// const stripeRoutes = require('./routes/stripeRoutes');
// app.use('/api/stripe', stripeRoutes);



// >>>>>>> 06d6629a5d17181113e80dcb991e5d6844aa32eb

env.config();

const app = express();  

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// <<<<<<< HEAD
app.use("/farmer",farmerrouter)
app.use("/crop",croprouter)
app.use("/buyer",buyerrouter)
app.use("/bid",bidrouter)

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
    })})
// =======
// Add Stripe routes
// app.use("/stripe", stripeRouter);
// app.use("/farmer", farmerRouter);
// app.use("/crop", cropRouter);

// mongoose.connect(process.env.MONGO_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// // >>>>>>> 06d6629a5d17181113e80dcb991e5d6844aa32eb
// })
// .then(() => {
//   console.log("DB connected");
//   app.listen(process.env.PORT, () => {
//     console.log("Server is running on port " + process.env.PORT);
//   });
// })
// .catch(err => { console.log(err) });
app.use('/', authRouter);
