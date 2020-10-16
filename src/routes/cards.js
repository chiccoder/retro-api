var express = require('express')
var router = express.Router()
const { models: { Card } } = require('../models')

router.get('/', async (req, res) => {
  try {
    const card = await Card.findAll({
    })
    res.json({ card })
  } catch (error) {
    console.error(error)
  }
})

router.get('/:cardId', async (req, res) => {
  const cardId = req.params.cardId
  try {
    const card = await Card.findAll({
      where: {
        uuid: cardId
      }
    }
    )
    res.json({ card })
  } catch (error) {
    console.error(error)
  }
})

router.post('/', (req, res) => {
  
  try {
    console.log({req})
    console.log(req.body)
    let card = Card.build({
      cardText: req.body.cardText,
      likes: req.body.likes,
      votes: req.body.votes
    });
    card.save().then((newCard) =>{
      console.log(newCard);
      res.json({ card });
    })
  } catch (error) {
    console.error(error)
  }
})
module.exports = router