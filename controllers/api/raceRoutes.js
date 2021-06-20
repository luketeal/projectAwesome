const router = require('express').Router();
const Race = require('../../models/Races'); 

router.post('/', async (req, res) => {
    console.log(req)
    const routeData = await Race.create({
        title: req.body.title,
        location_town: req.body.location_town,
        location_state: req.body.location_state,
        race_date: req.body.race_date,
        owner_id: req.session.passport.user,
    });
  
    return res.json(routeData);
});

module.exports = router;