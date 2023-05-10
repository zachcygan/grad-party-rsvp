const router = require('express').Router();
const User = require('../../models/User');

router.get('/', async (req, res) => {
    try {
        const users = await User.find();

        return res.json(users)
    } catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
})


module.exports = router;
