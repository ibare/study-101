import Woowahan from 'woowahan';
import * as Views from './views';

global.$ = global.jQuery = Woowahan.$;

let fetchProfile = Woowahan.Reducer.create('PROFILE', function() {
  this.onSuccess = function(data) {
    this.finish(data);
  };

  this.getData('/api/profile');
});

let fetchFamily = Woowahan.Reducer.create('FETCH family', function() {
  this.onSuccess = function(data) {
    this.finish(data);
  };

  this.getData('/api/user/family');
});

let app = new Woowahan();

app.use(fetchProfile);
app.use(fetchFamily);

app.start([
  { url: '/', view: Views.Main, container: 'body' },
  { url: '/sub', view: Views.Sub, container: 'body' }
]);
