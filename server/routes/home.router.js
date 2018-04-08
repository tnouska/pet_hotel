const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    console.log('req.query', req.query);
    
    if (req.query.id !== undefined) {
        let queryText = "SELECT name,pets.id,type, checked_in, owner.first_name FROM pets JOIN owner ON  pets.owner_id = owner.id WHERE owner_id = $1 ORDER BY name, id ASC;";
        pool.query(queryText,[req.query.id]).then((result) => {
            const responseArray = result.rows;
            res.send(responseArray);
        }).catch((error)=>{
            res.sendStatus(500);
        console.log('error in home.router.get with $1: ', error);
    });//end pool.query
    } else {
        let queryText = "SELECT name,pets.id,type, checked_in, owner.first_name FROM pets JOIN owner ON  pets.owner_id = owner.id ORDER BY name , id ASC;";
        pool.query(queryText).then((result)=> {
            const responseArray = result.rows;
            res.send(responseArray);
        }).catch((error)=>{
            res.sendStatus(500);
            console.log('error in home.router.get: ',error);
        });//end pool.query of else statement 
    }//end if/else on router.get listener.

});//end router.get listener
router.put('/:id', (req,res)=>{
    const pet = req.body;
    console.log('pet in router.put: ', pet);
    
    const queryText = 'UPDATE pets SET checked_in = $1 WHERE id = $2;';
    pool.query(queryText, [!pet.checked_in , pet.id]).then((response)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        res.sendStatus(500);
        console.log('error in home.router.put: ', error);
    });//end pool.query to update a pet by id to opposite of their current status
});//end router.put listener for statusUpdate
module.exports = router;
//end of file