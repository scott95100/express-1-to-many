const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')
//control our routes

//this path is really localhost:8000
router.get('/', (req, res)=> {
    // get all the users
    db.toy.findAll()
    .then( petstoys=> {
        res.render('toys', { petstoys })
    })
    //render a page to show all users
    
  })