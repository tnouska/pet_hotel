const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    let petOwnerId = req.body.id;
    if (petOwnerId !== undefined) {
        const queryText = `SELECT * FROM pets WHERE owner_id = $1;`;
        pool.query(queryText, [petOwnerId])
        .then((response)=>{
            const responseArray = response.rows;
            res.send(responseArray);
        })
        .catch((err)=>{
            console.log('error in manage.pets.router.get: ', err);
            res.sendStatus(500);
        });
    } else {
        const queryText = `SELECT * FROM pets;`;
        pool.query(queryText)
            .then((response) => {
                const responseArray = response.rows;
                res.send(responseArray);
            })
            .catch((err) => {
                console.log('error in manage.pets.router.get: ', err);
                res.sendStatus(500);
            });
    }
});

module.exports = router;
//end of file