var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    res.json({
        cards:[
            {
              "id": Date.now(),
              "value": "Kudos to team",
              "likes": 1,
              "votes": 0
            },
            {
              "id": Date.now()+1,
              "value": "Stuff didn't go well",
              "likes": 0,
              "votes": 0  
            }
          ]
    })
})

router.post('/:card', (req, res) => {
    // TODO: save new card
})

module.exports = router