import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators?query=&per_page=all&apikey=8736621e0e7c495d9e90b970fe7ea486';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  },
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
});
