const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'Handling GET request of the /users'
    });
});

router.post('/',(req,res,next)=>{
       const user = {
        name: req.body.name,
        age: req.body.age
};
res.status(201).json({
    message: 'Handling POST request of the /users',
    user: user
});
});
router.get('/:userID',(req,res,next)=>{
    const id = req.params.userID;

    if (id == 'admin'){
        res.status(200).json({
            message: 'You are the admin',
            ID: id
        });
    } else {
        res.status(200).json({
            message: 'Youa are an ordinary user',
            ID: id
        });
    }
   });
  
   router.patch('/:userID',(req,res,next)=>{
    const id = req.params.userID;
            res.status(200).json({
                message:'user updated'
        });
    });

    router.delete('/:userID',(req,res,next)=>{
        const id = req.params.userID;
                res.status(200).json({
                    message:'user deleted'
            });
        });

module.exports = router;