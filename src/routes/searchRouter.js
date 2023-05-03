const {Router} = require('express');
const {globalSearch} = require('../controllers/searchBarController')

const searchRouter = Router ();

searchRouter.get('/', async (req, res) => {
    const {searchValue} = req.query;
    try {
        const results = await globalSearch(searchValue);
        res.status(200).send(results)
        console.log(searchValue.length)
    } catch (error) {
        return res.status(400).send({error: error.message})
    }
})


module.exports = searchRouter;
