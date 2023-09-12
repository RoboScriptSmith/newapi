const express=require('express');
const loginrouter=express.Router();
loginrouter.get('/', (req, res) => {
     res.send('user login')
   })
   loginrouter.post('/', (req, res) => {
        res.send('user registration')
      })
      module.exports=loginrouter;
