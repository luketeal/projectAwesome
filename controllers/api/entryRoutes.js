const router = require('express').Router();
const Entry = require('../../models/Entry'); 



router.post('/', async (req, res) => {

    const entryData = await Entry.create(req.body);
  
    return res.json(entryData);
  });




// // http://localhost:3001/api/entries/id
router.put('/:id', async (req, res) => {    // Need to find out path to where we will be entering car info.

    const entryData = await Entry.findByPk(req.params.id)

    if(entryData) {
        entryData.race_id = req.body.race_id;
        entryData.user_id = req.body.user_id;
        entryData.car_id = req.body.car_id;
        await entryData.save()
    }
    else {
        res.status(404).send()
    }
    return res.json(entryData);
})


// http://localhost:3001/api/entries/id
router.delete('/:id', async (req, res) => {
    const entryData = await Entry.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    return res.json(entryData);
  });

  
module.exports = router;