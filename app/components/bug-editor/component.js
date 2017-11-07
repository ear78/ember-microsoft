import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save: function(model){
      let component = this;
      model.save().then(()=>{
        component.sendAction('handleRedirect');
      })
    }
  }
});
