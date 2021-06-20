const router = require('express').Router();
const Race = require('../../models/Races'); 

router.post('/', async (req, res) => {
    // console.log(req)
    const routeData = await Race.create({
        title: req.body.title,
        location_town: req.body.location_town,
        location_state: req.body.location_state,
        race_date: req.body.race_date,
        owner_id: req.session.passport.user,
    });
  
    return res.json(routeData);
});

// router.put('/', async (req, res) => {    // Need to find out path to where we will be entering car info.

//     const carData = await Car.findByPk(req.params.id)

//     if(carData) {
//         carData.make = req.body.make;
//         carData.model = req.body.model;
//         carData.horsepower = req.body.horsepower;
//         carData.topSpeed = req.body.topSpeed;
//         carData.acceleration = req.body.acceleration;
//         carData.user_id = req.session.passport.user;
//         await carData.save()
//     }
//     else {
//         res.status(404).send()
//     }
//     return res.json(carData);
// })

router.delete('/:id', async (req, res) => {
    const raceData = await Race.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    return res.json(raceData);
  });

module.exports = router;