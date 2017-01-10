import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);// two arguments routing the id
  },
  actions: {    // allows update from rental page
    update(rental, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          rental.set(key,params[key]);
        }
      });
      rental.save();
      this.transitionTo('index');
    }, // allows destroy from home page
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
