const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const authRouter = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const farmerRouter = require("./routes/farmerRoutes");
const cropRouter = require("./routes/cropRoute");
const stripeRouter = require("./routes/stripeRoutes"); // Import Stripe routes
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const stripeRoutes = require('./routes/stripeRoutes');
app.use('/api/stripe', stripeRoutes);




env.config();

const app = express();  

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Add Stripe routes
app.use("/stripe", stripeRouter);
app.use("/farmer", farmerRouter);
app.use("/crop", cropRouter);
app.use('/', authRouter);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("DB connected");
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port " + process.env.PORT);
  });
})
.catch(err => { console.log(err) });
