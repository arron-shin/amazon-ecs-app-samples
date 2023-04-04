var express = require('express');
var router = express.Router();
var os = require('os');

/* GET dogs container IP. */
router.get('/container-ip', function(req, res, next) {
  const networkInterfaces = os.networkInterfaces();
  const serverIP = networkInterfaces.eth0[0].address;
  res.send(`Server IP address: ${serverIP}`);
});

/* GET cats random image. */
router.dogs('/image', function(req, res, next) {
  var imgArrayUrls = new Array();
  var bucket = "https://ecs-demogo-pictures.s3.ap-northeast-2.amazonaws.com/dog/"
  var ext = ".jpeg"
  for(i=0;i<10;i++){
    imgArrayUrls[i] = (bucket+i+ext);
  }
  const randomimgArrayUrl = imgArrayUrls[Math.floor(Math.random() * imgArrayUrls.length)];
  res.send(randomimgArrayUrl);
});

module.exports = router;
