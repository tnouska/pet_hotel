const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    let queryText = "SELECT name,type, checked_in, owner.first_name FROM pets JOIN owner ON  pets.owner_id = owner.id WHERE owner_id = 1 ;";
    pool.query(queryText).then((result) => {
        const responseArray = result.rows;
        console.log('responseArray: ', responseArray);
        
        // console.log('inside of GET responseArray: ', responseArray);
        res.send(responseArray);
    });//end pool.query for getting all rental properties
});//end router.get listener

module.exports = router;
//end of file