const express = require('express');
const device = require('express-device');
const app = express();

app.use(device.capture());

app.get('/', function(req, res) {
  if (req.device.type === 'phone') {
    res.redirect('https://www.barangenez.com/mobil');
  } else {
    res.redirect('https://www.barangenez.com/masaüstü');
  }
});

app.listen(process.env.PORT || 5500, function() {
  console.log('Uygulama başlatıldı.');
});