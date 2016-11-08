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
  let json = JSON.parse(`{"timestamp":1478165726605,"code":"0000","message":"ok","result":{"id":"201606080001","loginId":"jhseong","userName":"성주현","authorityCode":"10","tyCode":"","lastPasswordModifiedDate":"2016-10-31 14:21:08","corporateId":"2011080101","corporateName":"(주)우아한형제들","managerId":null,"corporateIdOfDsmo":null,"ordinalCode":null}}`);

  res.header('Access-Control-Allow-Origin', '*');
  res.jsonp(json);
});

app.listen(7070, () => console.log('ready 7070'));
