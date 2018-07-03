const  express = require('express');
const router = express.Router();

// Item Models
const Item = require('../../models/items');
// @route get api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create item
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @route delete api/items
// @desc delete Items
// @access Public
router.delete('/', (req, res) => {
   Item.findById(req.params.id)
   .then(item => item.remove().then(() => res.json({scuess: true})))
       .catch(err => res.status(404).json({ sucess: false }));
});


module.exports = router;