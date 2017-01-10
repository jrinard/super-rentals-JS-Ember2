
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
     return this.store.findAll('rental');
   },
   actions: {  // allows save from index
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
