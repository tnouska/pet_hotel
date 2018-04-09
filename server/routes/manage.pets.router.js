const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => {
    let toBeDeletedPet = req.params;
    const queryText = 'DELETE FROM pets WHERE id = $1;';
    pool.query(queryText, [toBeDeletedPet.id]).then((response) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log('error in home.router.delete: ', error);
        res.sendStatus(500);
    });//end pool.query to delete pet
});//end home.router.delete listener

router.get('/', (req,res)=>{
    let petOwnerId = req.query.id;

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
        });//end pool.query to get certain
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
            });//end pool.query to get all pets
    }//end if/else
});//end router.get 
router.post('/', (req, res) => {
    let newPet = req.body;
    const queryText = `INSERT INTO pets (name,owner_id,type,breed,color)VALUES($1,$2,$3,$4,$5);`;
    pool.query(queryText, [newPet.name,newPet.owner_id,newPet.type,newPet.breed,newPet.color])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log('error inside of manage.pets.router.post: ', error);
            res.sendStatus(500);
        });//end pool.query for dashboard.post
});// end dashboard.router.post listener
router.post('/pics', (req,res)=>{
    let newPic = req.body;
    const queryText = `INSERT INTO pictures (pic_url,pet_id,owner_id)VALUES($1,$2,$3);`;
    pool.query(queryText, [newPic.pic_url,newPic.pet_id,newPic.owner_id])
    .then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('error inside of manage.pets.router.post /pics: ', error);
        res.sendStatus(500);
    });//end pool.query to post to pictures table
});//end router.post /pics listener
module.exports = router;
//end of file