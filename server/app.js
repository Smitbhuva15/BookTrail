const mongoose = require("mongoose");
require("dotenv").config();

const express = require("express");
const { bookRouter } = require("./router/bookroutes");
const app = express();
const PORT = process.env.PORT || 3000;
const dbURI = process.env.MONGODB_URI;
const cors = require("cors"); 
const { userRoutes } = require("./router/userrouters");

app.use(cors());
app.use(express.json())

app.use(bookRouter)
app.use(userRoutes)




try {
  mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected successfully!!!!");
} catch (error) { 
  console.error("MongoDB connection error:", err);
}

app.listen(PORT, () => {
  console.log(`server is started http://localhost:${PORT}`);
});
