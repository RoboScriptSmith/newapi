const express = require('express')
const app = express()
const port = 3000
const ProductRoute= require('./routes/produtes.route');
const UserRoute= require('./routes/user.route');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adityasaini508937:Aditya%401234@cluster0.uagkhw3.mongodb.net/').then(console.log('connect the database'));

const ProductRoute1 =require('./routes/produtes.route')


app.use("/products", ProductRoute1);

app.use((req, res) => {
  res.status = 404;
  res.send({ error: "not found" });
});
app.listen(3005, () => {
  console.log("server started");
});