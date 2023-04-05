const express = require('express');
const router = express.Router();
const os = require('os');

router.get('/container-ip', (req, res) => {
  const serverIP = os.networkInterfaces().eth0[0].address;
  res.send(`Server IP address: ${serverIP}`);
});

router.get('/image', (req, res) => {
  const imgArrayUrls = Array.from({ length: 10 }, (_, i) => `https://ecs-demogo-pictures.s3.ap-northeast-2.amazonaws.com/dog/${i}.jpeg`);
  const randomimgArrayUrl = imgArrayUrls[Math.floor(Math.random() * imgArrayUrls.length)];
  const serverIP = os.networkInterfaces().eth0[0].address;
  const responseData = {
    imageUrl: randomimgArrayUrl,
    containerIp: serverIP,
  };
  res.json(responseData);
});

module.exports = router;
