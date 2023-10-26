var express = require('express');
var router = express.Router();
 
/* GET home page. */
router.get('/', function(req, res, next) {
    let x = Math.random() * 100;
    x = x.toFixed(3)
    if(req.query.x != undefined){
        x = parseFloat(req.query.x)
    }
    let num1 = Math.fround(x);
    let num2 = Math.random(x);
    let num3 = Math.round(x);
  res.render('computation', {x:x, fround:num1, random:num2, round:num3});
});
module.exports = router;