const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{});

router.post('/',(req,res,next)=>{
    const code = {
        language: req.body.lang,
        age: req.body.data
};
res.status(201).json({
    message: 'Handling POST request of the /codes',
    code: code
});
});

router.get('/:codeID',(req,res,next)=>{});
  
router.patch('/:codeID',(req,res,next)=>{});

router.delete('/:codeID',(req,res,next)=>{});

module.exports = router

