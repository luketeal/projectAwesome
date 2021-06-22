const router = require('express').Router();
const Car = require('../../models/Cars'); 


// http://localhost:3001/api/cars
router.get('/', async (req, res) => {

    const carData = await Car.findAll()     // This may be moved to a garage route.
    res.json(carData);
});



// http://localhost:3001/api/cars/garage
router.post('/', async (req, res) => {
  console.log(req.session.passport.user + ' is from passport')
    const carData = await Car.create({
      make: req.body.make,
      model: req.body.model,
      horsepower: req.body.horsepower,
      topSpeed: req.body.topSpeed,
      acceleration: req.body.acceleration,
      user_id: req.session.passport.user,
      });
  
    return res.json(carData);
  });



// http://localhost:3001/api/cars/id
router.put('/:id', async (req, res) => {    // Need to find out path to where we will be entering car info.

    const carData = await Car.findByPk(req.params.id)

    if(carData) {
        carData.make = req.body.make;
        carData.model = req.body.model;
        carData.horsepower = req.body.horsepower;
        carData.topSpeed = req.body.topSpeed;
        carData.acceleration = req.body.acceleration;
        carData.user_id = req.session.passport.user;
        await carData.save()
    }
    else {
        res.status(404).send()
    }
    return res.json(carData);
})


// http://localhost:3001/api/cars/id
router.delete('/:id', async (req, res) => {
    const carData = await Car.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    return res.json(carData);
  });
  
module.exports = router;
