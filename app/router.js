import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmbeddedENV.locationType
});

Router.map(function() {
});

export default Router;
