const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/',(req,res)=>{
    let queryText = "SELECT * FROM pets WHERE checked_in = 'true' ORDER BY id ASC";
    pool.query(queryText).then((result) => {
        const responseArray = result.rows;
        // console.log('inside of GET responseArray: ', responseArray);
        res.send(responseArray);
    });//end pool.query for getting all rental properties
});//end router.get listener

module.exports = router;
//end of file