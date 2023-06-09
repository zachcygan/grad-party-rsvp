const router = require('express').Router();

router.get('/', (req, res) => {
   try {
     res.render('homepage')
   } catch (err) {
     res.status(500).json(err)
   }
})

router.get('/success', (req, res) => {
  try {
    res.render('success')
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;