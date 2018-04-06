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
router.post('/', (req, res) => {
    let newPet = req.body;
    const queryText = `INSERT INTO pets (name,type,breed,color)VALUES($1,$2,$3,$4);`;
    pool.query(queryText, [newPet.name,newPet.type,newPet.breed,newPet.color])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error inside of manage.pets.router.post: ', error);
            res.sendStatus(500);
        });//end pool.query for dashboard.post
});// end dashboard.router.post listener
module.exports = router;
//end of file