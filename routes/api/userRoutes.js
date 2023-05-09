const router = require('express').Router();

const {
    getUsers,
    getSingleUser,
    createUser,
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser)
router.route('/:id').get(getSingleUser)

module.exports = router;

// app.post('/rsvp', async (req, res) => {
//     const rsvp = new RSVP(req.body);

//     try {
//         await rsvp.save();
//         res.status(201).send(rsvp);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// app.get('/rsvp', async (req, res) => {
//     try {
//         const rsvps = await RSVP.find({});
//         res.status(200).send(rsvps);
//     } catch (error) {
//         res.status(500).send(error);
//     }
// });

// const port = process.env.PORT || 3001;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
