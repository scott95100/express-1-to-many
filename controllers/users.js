const express = require('express')
// router will act like app has for us
const router = express.Router()
// bring in db
const db = require('../models')
//control our routes




//this path is really localhost:8000
router.get('/', (req, res)=> {
  // get all the users
  db.user.findAll()
  .then( allUsers=> {
      res.render('allUsers', { allUsers })
  })
  //render a page to show all users
  
})




//this will be a user show page
router.get('/:id', (req, res)=> {
    //this will be a show page for a user
    db.user.findOne({ 
        where: {
            id: req.params.id
        }, 
        include: (db.pet)
    })
    .then( user=> {
        //we will get back a pets property
        console.log(user.pets)
        res.render('usersShow', { user })
    })
    //we will show all the animals
    //we will have a form to make a new animal
})

router.post('/:id/addPet', (req, res)=> {
    db.user.findOne({ where: { id: req.params.id }})
    .then(user=> {
      //sequelize method
      user.createPet({
        name: req.body.name,
        species: req.body.species
      })
      .then((pet)=> {
        console.log(pet)
        res.redirect(`/users/${req.params.id}`)
      })
    })
  })




// export the router to have access to it
module.exports = router