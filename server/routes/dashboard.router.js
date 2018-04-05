const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let ownerId = req.body.id;
    if (ownerId !== undefined) {
        const queryText = `SELECT * FROM owner WHERE id = $1;`;
        pool.query(queryText, [ownerId])
            .then((response) => {
                const responseArray = response.rows;
                res.send(responseArray);
            })
            .catch((err) => {
                console.log('error in dashboard.router.get: ', err);
                res.sendStatus(500);
            });
    } else {
        const queryText = `SELECT * FROM owner;`;
        pool.query(queryText)
            .then((response) => {
                const responseArray = response.rows;
                res.send(responseArray);
            })
            .catch((err) => {
                console.log('error in dashboard.router.get: ', err);
                res.sendStatus(500);
            });
    }
});

module.exports = router;
//end of file