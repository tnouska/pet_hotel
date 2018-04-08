const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/:id', (req,res)=>{
    let toBeDeletedOwner = req.params;
    const queryText = 'DELETE FROM owner WHERE id = $1;';
    pool.query(queryText, [toBeDeletedOwner.id]).then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error in dashboard.router.delete: ', error);
        res.sendStatus(500);
    });//end pool.query to delete owner
});//end dashboard.router.delete listener

router.get('/', (req, res) => {
    let ownerId = req.body.id;
    if (ownerId !== undefined) {
        const queryText = `SELECT owner.first_name, owner.last_name, owner.phone_number, owner.id,count(owner_id) FROM pets JOIN owner ON pets.owner_id = owner.id WHERE owner_id = $1 GROUP BY owner.first_name,owner.last_name,owner.phone_number,owner.id;`;
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
        const queryText = `SELECT owner.first_name, owner.last_name, owner.phone_number,owner.id,count(owner_id) FROM pets JOIN owner ON pets.owner_id = owner.id GROUP BY owner.first_name,owner.last_name,owner.phone_number,owner.id;`;
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
router.post('/',(req,res)=>{
    let newOwner = req.body;
    const queryText = `INSERT INTO owner (first_name,last_name,phone_number)VALUES($1,$2,$3);`;
    pool.query(queryText, [newOwner.first_name, newOwner.last_name, newOwner.phone_number])
    .then((response)=>{
        res.sendStatus(201);
    }).catch((error)=>{
        console.log('error inside of dashboard.router.post: ', error);
        res.sendStatus(500);
    });//end pool.query for dashboard.post
});// end dashboard.router.post listener

module.exports = router;
//end of file