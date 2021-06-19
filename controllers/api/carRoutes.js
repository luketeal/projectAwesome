const router = require('express').Router();
// const { beforeBulkDestroy } = require('../../models/Cars');
// const { Car } = require('../../models');
const Car = require('../../models/Cars'); 
// const withAuth = require('../../utils/auth');

// http://localhost:3001/api/cars
router.get('/', async (req, res) => {

    const carData = await Car.findAll()     // This may be moved to a garage route.
    res.json(carData);
});



// http://localhost:3001/api/cars/garage
router.post('/garage', async (req, res) => {
    const carData = await Car.create(req.body);
  
    return res.json(carData);
  });



// http://localhost:3001/api/cars/id
router.put('/:id', async (req, res) => {    // Need to find out path to where we will be entering car info.

    const carData = await Car.findByPk(req.params.id)

    if(carData) {
        car.make = req.body.make;
        car.model = req.body.model;
        car.horsepower = req.body.horsepower;
        car.topSpeed = req.body.topSpeed;
        car.acceleration = req.body.acceleration;
        car.user_id = req.user.id;
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