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
        track_image: req.body.track_image
    });
  
    return res.json(routeData);
});

router.put('/:id', async (req, res) => {    // Need to find out path to where we will be entering car info.
  
    const raceData = await Race.findByPk(req.params.id)

    if(raceData) {
        raceData.title = req.body.title;
        raceData.location_town = req.body.location_town;
        raceData.location_state = req.body.location_state;
        raceData.race_date = req.body.race_date;
        raceData.owner_id = req.session.passport.user;
        raceData.track_image = req.body.track_image;
        await raceData.save()
    }
    else {
        res.status(404).send()
    }
    return res.json(raceData);
})

router.delete('/:id', async (req, res) => {
    const raceData = await Race.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    return res.json(raceData);
  });

module.exports = router;