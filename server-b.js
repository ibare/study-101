let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let exphbs  = require('express-handlebars');
let md5 = require('md5');
let cache = require('memory-cache');

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyparser());

app.get('/', (req, res) => {
  res.render('login.handlebars', { redirectUrl: req.query.redirectUrl });
});

app.post('/login', (req, res) => {
  let token = md5(req.body.id);

  cache.put(token, req.body.id);

  res.redirect(req.body.redirectUrl + '?token=' + token);
});

app.get('/gnb', (req, res) => {
  let name = cache.get(req.query.token);

  res.header('Access-Control-Allow-Origin', '*');
  res.jsonp({
    body: `<div><span style="color: pink;">${name}</span> <a href="/">Logout</a></div>`
  });
});

app.listen(7070, () => console.log('ready 7070'));
