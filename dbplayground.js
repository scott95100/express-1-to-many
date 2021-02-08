//access to database
const db = require('./models')
///test area for server///



//make some users
// db.user.create({
//    firstName: 'Mark',
//    lastName: 'Christing',
//    age: 32,
//    email: 'niceemail@gmail.com'
// }).then(newUser => {
//     //make a pet associated with user
//     //createASSOCIATEDMODELNAME()
//     newUser.createPet({
//         name: "Baker",
//         species: 'K9, pug'
//     }).then( newDog => {
//         console.log(newDog)
//     })
// })

// db.user.findOne({ where: {id: 1}})
// .then(user=>{
//     //another built in method 
//     user.getPets()
//     .then(allPets=> {
//         console.log(allPets)
//     })
// })