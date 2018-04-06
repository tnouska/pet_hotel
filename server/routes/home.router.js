const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    if (req.query.owner_id !== undefined) {
        let queryText = "SELECT name,type, checked_in, owner.first_name FROM pets JOIN owner ON  pets.owner_id = owner.id WHERE owner_id = $1 ;";
        pool.query(queryText,[req.body.owner_id]).then((result) => {
            const responseArray = result.rows;
            res.send(responseArray);
        }).catch((error)=>{
        console.log('error in home.router.get with $1: ', error);
    });    
    } else {
        let queryText = "SELECT name,type, checked_in, owner.first_name FROM pets JOIN owner ON  pets.owner_id = owner.id;";
        pool.query(queryText).then((result)=> {
            const responseArray = result.rows;
            res.send(responseArray);
        }).catch((error)=>{
            console.log('error in home.router.get: ',error);
        });
    }

});//end router.get listener

module.exports = router;
//end of file