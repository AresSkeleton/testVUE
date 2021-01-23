var express = require('express');
const { route } = require('./users');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/download', function (req, res, next) {
  // let sss= JSON.parse(req.body)
  res.setHeader('Content-Type', 'application/txt');
  res.download(`todo.txt`);

})

router.post('/download', function (req, res, next) {
  // let sss= JSON.parse(req.body)
  console.log(req.body.text);
  try {
    fs.writeFile('todo.txt', req.body.text, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  } catch (err) {
    console.log(err);
    res.send({ iscorrect: false })
  }
  res.send({ iscorrect: true })
})

module.exports = router;
