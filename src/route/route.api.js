const express = require('express');

const router = express.Router();

router.get('/echo',(req,res,next) => {
    logger.info('Returning Echo');
    res.status(200).json({status:'success',message:'Echo from FPTS'});
})

module.exports = router;