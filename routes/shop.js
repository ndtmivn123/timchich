var express = require('express');
var router = express.Router();
var fs = require('fs');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'FullStack Vietnam' });
// });
router.get('/', function (req, res, next) {
	var obj;
	fs.readFile('./db/shop.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    // console.log(obj)
	// 	obj = JSON.parse(data);
		res.render('shop', { shop: obj });
	});


});

module.exports = router;
