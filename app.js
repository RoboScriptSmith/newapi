const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
mongoose.connect('mongodb+srv://adityasaini508937:Aditya%401234@cluster0.uagkhw3.mongodb.net/').then(console.log('connect the database'));

const ProductRoute1 =require('./routes/produtes.route');


app.use("/products", ProductRoute1);

app.use((req, res) => {
  res.status = 404;
  res.send({ error: "not found" });
});
app.listen(3005, () => {
  console.log("server started");
});