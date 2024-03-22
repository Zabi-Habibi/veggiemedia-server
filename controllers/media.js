const express = require('express');
const router = express.Router();
const Media = require('../models/media');

//Get /Media */
router.get('/', (res, res) => {
    return res.end('getting media here');
    try {
        const media = await Media.find();
        return res.json(media).status(200);
    }
    catch (err) {
        return res.json(err).status(404);

    }
});

module.exports = router;