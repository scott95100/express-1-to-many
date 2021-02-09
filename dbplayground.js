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

// First, get a reference to a pet.
// db.pet.findOrCreate({
//     where: {
//       name: "Silly May",
//       species: "Mini Aussie"
//     }
//   }).then(function([pet, created]) {
//     // Second, get a reference to a toy.
//     db.toy.findOrCreate({
//       where: {type: "stinky bear", color: "brown"}
//     }).then(function([toy, created]) {
//       // Finally, use the "addModel" method to attach one model to another model.
//       pet.addToy(toy).then(function(relationInfo) {
//         console.log(toy.type, "added to", pet.name);
//       });
//     });
//   });


// db.toy.findOne({
//     where: {type: "ball"}
//   }).then(function(toy) {
//     toy.getPets().then(function(pets) {
//       console.log(pets.length, 'pet(s) love the', toy.color, toy.type)
//     });
//   });

// db.pet.findOne({
//     where: {name: "Ruby Tuesday"}
//   }).then(function(pet) {
//     pet.getToys().then(function(toys) {
//       toys.forEach(function(toy) {
//         console.log(pet.name, 'loves their', toy.color, toy.type);
//       });
//     });
//   });