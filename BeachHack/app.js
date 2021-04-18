const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();

function error404(req, res) {
  res.status(404);

  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'public/404.html'));
    return;
  }

  if (req.accepts('json')) {
    res.send({
      status: 404,
      error: 'Not found'
    });
    return;
  }
  
  res.type('txt').send('404 - Not found');
}

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(error404)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
