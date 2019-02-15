var express = require('express');
var router = express.Router();
var par;
router.get('/item:id', function(req, res, next) {
par=req.params.id
    console.log(par)

res.render('item', {
title: 'item',
name:"tom",
par:par
});
});

module.exports = router;
